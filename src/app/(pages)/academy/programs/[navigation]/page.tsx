import { notFound } from 'next/navigation'
import { programs } from '@/app/data/programs'
import ProgramsDetailView from './ProgramsDetailView'

export async function generateStaticParams() {
  return programs.map((program) => ({
    navigation: program.navigation,
  }))
}

export default function ProgramsDetailViewPage({
  params,
}: Readonly<{
  params: { navigation: string }
}>) {
  const program = programs.find(
    (program) => program.navigation === params.navigation,
  )

  if (!program) {
    notFound()
  }

  return <ProgramsDetailView program={program} />
}
