import Image from "next/image"

type PageHeroProps = {
  title: string
}

export default function PageHero({ title }: PageHeroProps) {
  return (
    <header className="relative flex min-h-40 items-center justify-center overflow-hidden bg-[#263f6b] px-4 py-8 sm:min-h-48">
      <Image
        src="/images/hero/breadcrumb.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
        priority
      />
      <h1 className="relative max-w-5xl text-center text-4xl font-semibold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] sm:text-5xl">
        {title}
      </h1>
    </header>
  )
}
