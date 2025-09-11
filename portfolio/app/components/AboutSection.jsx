import aboutData from "../data/about.json";

export default function AboutSection() {
  const { hero } = aboutData;
  
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-16 text-center">
      {/* Description */}
      <p className="mx-auto max-w-3xl text-sm text-zinc-300">
        {hero.description}
      </p>
    </section>
  );
}