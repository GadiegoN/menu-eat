"use client";

import { useState } from "react";
import { auth } from "../../../services/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (err) {
      setError("Falha ao fazer login. Verifique suas credenciais.");
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleLogin}
        className="p-6 bg-white rounded shadow-lg max-w-sm w-full"
      >
        <h2 className="text-xl font-semibold mb-4 text-slate-600">Login</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full placeholder:text-slate-600 text-slate-950 mb-4 p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full placeholder:text-slate-600 text-slate-950 mb-4 p-2 border rounded"
          required
        />
        <Button className="w-full" text="Entrar" variant="outline" />
      </form>
    </div>
  );
}
