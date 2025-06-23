import { notFound } from "next/navigation";
import ProgramsDetailView from "./ProgramsDetailView";

interface PageProps {
  params: Promise<{
    navigation: string;
  }>;
}

export async function generateStaticParams() {
  const { programs } = await import("@/app/data/programs");
  return programs.map((program) => ({
    navigation: program.navigation,
  }));
}

export default async function Page({ params }: PageProps) {
  const { programs } = await import("@/app/data/programs");

  const navigation = (await params).navigation;
  const program = programs.find((program) => program.navigation === navigation);

  if (!program) notFound();

  return <ProgramsDetailView program={program} />;
}
