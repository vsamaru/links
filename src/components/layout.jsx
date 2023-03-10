import Meta from '@/components/meta'
import dynamic from 'next/dynamic'

const Sidebar = dynamic(() => import('@/components/sidebar'), {
  ssr: false,
})

export default function Layout({ children, session }) {
  return (
    <>
      <Meta />
      <section className="mx-auto flex h-full max-w-full items-stretch overflow-hidden selection:bg-slate-800 selection:text-white">
        <Sidebar session={session} />
        <main className="flex-grow basis-0">{children}</main>
      </section>
      <div className="pattern fixed top-0 left-0 -z-[1] h-full w-full" />
    </>
  )
}
