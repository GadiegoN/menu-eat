"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../contexts/auth-context";

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/login");
    }
  }, [user, loading, router]);

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
    </div>
  );
}
