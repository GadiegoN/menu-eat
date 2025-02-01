"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addMenu } from "@/services/menu-service";
import { useAuth } from "@/contexts/auth-context";

export default function CreateMenuPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const { user } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return alert("O nome do cardápio é obrigatório!");

    if (!user)
      return alert("Você precisa estar logado para criar um cardápio!");

    try {
      await addMenu({ name, description }, user.uid);
      router.push("/dashboard");
    } catch (error) {
      console.error("Erro ao criar cardápio:", error);
      alert("Erro ao criar o cardápio. Tente novamente.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-semibold mb-4">Criar Cardápio</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nome do Cardápio"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Descrição (opcional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Criar Cardápio
        </button>
      </form>
    </div>
  );
}
