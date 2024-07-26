'use client'
import Link from 'next/link'
export default function halfGuard() {
  return (
    <div className="flex flex-col gap-4">
      <Link
        href="courses/openguard"
        className="w-full lg:w-auto text-center dark:border-b-2   "
      >
        guarda aberta
      </Link>
      <Link
        href="courses/halfguard"
        className="w-full lg:w-auto text-center dark:border-b-2   "
      >
        meia guarda
      </Link>
      <Link
        href="courses/closedguard"
        className="w-full lg:w-auto text-center dark:border-b-2   "
      >
        guarda fechada
      </Link>
    </div>
  )
}
