import { useEffect, useState } from "react";
import { auth } from "../services/firebase-config";
import { onAuthStateChanged, User } from "firebase/auth";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push("/auth/login");
      }
    });

    return unsubscribe;
  }, [router]);

  return user;
};
