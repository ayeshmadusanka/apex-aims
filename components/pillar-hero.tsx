import Image from "next/image";

type PillarHeroProps = {
  image: string;
  title: string;
  alt: string;
};

export function PillarHero({ image, title, alt }: PillarHeroProps) {
  return (
    <section className="relative isolate aspect-[4/3] w-full overflow-hidden sm:aspect-[18/5]">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#15233a]/60" />
      <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
        <h1 className="max-w-5xl text-3xl font-semibold tracking-tight text-white drop-shadow-md sm:text-4xl md:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
