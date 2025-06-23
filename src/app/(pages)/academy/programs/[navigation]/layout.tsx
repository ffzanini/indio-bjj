import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detalhes dos Programas | Índio Jiu Jitsu",
};

export default function ProgramsDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
