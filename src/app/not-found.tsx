import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center text-foreground">
      <h1 className="text-3xl font-semibold">Página não encontrada</h1>
      <p className="max-w-md text-base">Esse endereço não existe na JA Índio Jiu Jitsu.</p>
      <Link href="/pt" className="underline">
        Voltar ao início
      </Link>
    </main>
  );
}
