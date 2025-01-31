"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../contexts/auth-context";
import Link from "next/link";
import { getMenus } from "@/services/menu-service";
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
        const fetchedMenus = await getMenus();
        setMenus(fetchedMenus);
      }
    };
    fetchMenus();
  }, [user]);

  if (loading || !user) return <div>Carregando...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      {user ? (
        <div>
          <h2>Bem-vindo ao Dashboard, {user.displayName || "Usuário"}</h2>
          <Link href="/dashboard/create-menu">
            <Button text="Criar Cardápio" />
          </Link>

          <h3 className="mt-6 text-2xl">Cardápios Criados</h3>
          <ul className="mt-4 space-y-4">
            {menus.map((menu) => (
              <li key={menu.id} className="p-4 bg-secondary rounded">
                <h4 className="font-semibold">{menu.name}</h4>
                <p>{menu.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>
          Acesso não autorizado. Você precisa estar logado para acessar esta
          página.
        </p>
      )}
    </div>
  );
}
