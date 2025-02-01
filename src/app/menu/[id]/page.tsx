"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getMenuById } from "@/services/menu-service";
import { Menu } from "@/@types/menu";

export default function MenuDetailPage() {
  const params = useParams();
  const id = params ? params.id : null;
  const [menu, setMenu] = useState<Menu | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      if (id) {
        try {
          const fetchedMenu = await getMenuById(id as string);
          setMenu(fetchedMenu);
        } catch (error) {
          console.error("Erro ao carregar cardápio:", error);
          alert("Erro ao carregar os detalhes do cardápio.");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchMenu();
  }, [id]);

  if (loading) return <div>Carregando...</div>;

  if (!menu) return <div>Cardápio não encontrado.</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold">{menu.name}</h1>
      <p className="mt-2 text-gray-400">{menu.description}</p>
    </div>
  );
}
