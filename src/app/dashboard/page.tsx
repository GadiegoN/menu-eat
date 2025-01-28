"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/auth-context";
import { signOut } from "firebase/auth";
import { auth } from "@/services/firebase-config";

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/login");
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/auth/login");
    } catch (err) {
      console.error("Erro ao sair", err);
    }
  };

  if (loading || !user) return <div>Carregando...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      {user ? (
        <div>
          <h1>Bem-vindo ao Dashboard, {user.displayName || "Usuário"}</h1>
        </div>
      ) : (
        <p>
          Acesso não autorizado. Você precisa estar logado para acessar esta
          página.
        </p>
      )}

      <button
        onClick={handleLogout}
        className="py-2 px-4 bg-red-600 text-white rounded"
      >
        Sair
      </button>
    </div>
  );
}
