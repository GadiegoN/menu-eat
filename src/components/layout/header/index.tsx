"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/services/firebase-config";
import { Button } from "@/components/ui";
import { LogOut } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [user] = useAuthState(auth);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const getInitials = (email: string | null | undefined) => {
    if (!email) return "??";
    return email.substring(0, 2).toUpperCase();
  };

  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-md relative">
      <Link href="/" className="text-xl font-bold text-primary">
        QRMenu
      </Link>

      {user ? (
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            {user.photoURL ? (
              <Image
                width={100}
                height={100}
                src={user.photoURL}
                alt="Foto de perfil"
                className="w-10 h-10 rounded-full border"
              />
            ) : (
              <div className="w-10 h-10 flex items-center justify-center bg-gray-300 text-gray-700 font-bold rounded-full border">
                {getInitials(user.email)}
              </div>
            )}

            <div className="text-left">
              <p className="text-sm font-medium">
                {user.displayName || "Usuário"}
              </p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <Button
                onClick={() => auth.signOut()}
                text="Sair"
                variant="destructive"
                className="w-full flex items-center justify-center gap-2"
              >
                <LogOut size={16} />
                Sair
              </Button>
            </div>
          )}
        </div>
      ) : (
        <Link href="/auth/login">
          <Button text="Entrar" variant="ghost" />
        </Link>
      )}
    </header>
  );
}
