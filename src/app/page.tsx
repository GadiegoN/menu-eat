import { Button } from "@/components/ui";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-4">
      <h1 className="text-4xl font-bold text-primary">Bem-vindo ao QRMenu!</h1>
      <p className="mt-4 text-lg text-center max-w-lg">
        Crie e gerencie seus cardápios online facilmente. Digitalize sua
        experiência gastronômica com QR codes personalizados.
      </p>
      <div className="mt-6 flex gap-4">
        <Link href="/dashboard">
          <Button text="Comece Agora" variant="primary" />
        </Link>
        <Button text="Saiba Mais" variant="outline" />
      </div>
    </div>
  );
}
