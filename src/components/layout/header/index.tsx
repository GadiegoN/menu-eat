"use client";

import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/services/firebase-config";
import { Button } from "@/components/ui";

export default function Header() {
  const [user] = useAuthState(auth);

  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      <Link href="/" className="text-xl font-bold text-primary">
        QRMenu
      </Link>

      {user ? (
        <div className="w-1/12">
          <Button
            onClick={() => auth.signOut()}
            text="Sair"
            variant="destructive"
          />
        </div>
      ) : (
        <Link
          href="/auth/login"
          className="flex items-center gap-2 text-primary hover:text-secondary transition-all"
        >
          <Button text="Entrar" variant="ghost" />
        </Link>
      )}
    </header>
  );
}
