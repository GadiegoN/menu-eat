"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../contexts/auth-context";
import Link from "next/link";
import { getMenusByUser } from "@/services/menu-service";
import { Menu } from "@/@types/menu";
import { Button } from "@/components/ui";

export default function Dashboard() {
  const { user, loading } = useAuth();
  const [menus, setMenus] = useState<Menu[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchMenus = async () => {
      if (user) {
        console.log("Buscando cardápios para o usuário:", user.uid);
        const fetchedMenus = await getMenusByUser(user.uid);
        console.log("Cardápios encontrados:", fetchedMenus);
        setMenus(fetchedMenus);
      }
    };
    fetchMenus();
  }, [user]);

  if (loading || !user) return <div>Carregando...</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <h2 className="mt-2 text-gray-400">
            Bem-vindo, {user.displayName || "Usuário"}!
          </h2>
        </div>

        <Link href="/dashboard/create-menu">
          <Button text="Criar Cardápio" />
        </Link>
      </div>

      <h3 className="mt-6 text-2xl">Seus Cardápios</h3>
      <ul className="mt-4 space-y-4">
        {menus.map((menu) => (
          <li
            key={menu.id}
            className="p-4 flex justify-between items-center bg-gray-100 dark:bg-gray-800 rounded shadow"
          >
            <div>
              <h4 className="font-semibold">{menu.name}</h4>
              <p className="text-sm text-gray-400">{menu.description}</p>
            </div>

            <div className="mt-3 flex gap-2">
              <Link href={`/menu/${menu.id}`}>
                <Button text="Ver Cardápio" variant="outline" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
