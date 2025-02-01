"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getMenuById } from "@/services/menu-service";
import { Menu } from "@/@types/menu";

export default function MenuPage() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const [menu, setMenu] = useState<Menu | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      if (id) {
        const fetchedMenu = await getMenuById(id);
        setMenu(fetchedMenu);
      }
      setLoading(false);
    };
    fetchMenu();
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (!menu) return <div>Cardápio não encontrado.</div>;

  return (
    <div className="min-h-screen p-6 bg-white dark:bg-gray-900">
      <h1 className="text-3xl font-semibold">{menu.name}</h1>
      <p className="text-gray-600">{menu.description}</p>
    </div>
  );
}
