import { createFileRoute } from "@tanstack/react-router";

import heroSourdough from "@/assets/hero-sourdough.jpg";
import craftScoring from "@/assets/craft-scoring.jpg";
import craftOven from "@/assets/craft-oven.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Bakers Hub — Slow-Fermented Sourdough & Pastries" },
      {
        name: "description",
        content:
          "Bakers Hub is a neighbourhood bakery in Hackney, London: long-fermentation sourdough, laminated pastries and heritage grains, baked fresh every morning.",
      },
      { property: "og:title", content: "Bakers Hub — Slow-Fermented Sourdough & Pastries" },
      {
        property: "og:description",
        content:
          "Long-fermentation sourdough and hand-laminated pastries, baked fresh daily in Hackney, London.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Bakery",
          name: "Bakers Hub",
          address: {
            "@type": "PostalAddress",
            streetAddress: "128 Artisans Row",
            addressLocality: "Hackney, London",
            postalCode: "E8 4PT",
            addressCountry: "GB",
          },
          openingHours: ["Mo-Fr 07:30-15:00", "Sa-Su 08:30-16:00"],
        }),
      },
    ],
  }),
});

const signatures = [
  {
    name: "Black Forest",
    note: "Dark chocolate sponge, kirsch cherries and softly whipped cream.",
    price: "Rs 190",
  },
  {
    name: "Red Velvet",
    note: "Cocoa-buttermilk crumb layered with tangy cream cheese frosting.",
    price: "Rs 190",
  },
  {
    name: "Walnut Fudge",
    note: "Roasted Kashmiri walnuts folded through dense chocolate fudge.",
    price: "Rs 210",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-canvas text-ink font-sans">
      <nav className="sticky top-0 z-50 bg-canvas/80 backdrop-blur-md border-b border-ink/5">
        <div className="max-w-screen-xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-serif italic text-xl tracking-tight">Bakers Hub</span>
          <div className="flex gap-4 items-center">
            <a href="#menu" className="text-sm font-medium">
              Menu
            </a>
            <a
              href="#visit"
              className="text-sm font-medium bg-ink text-canvas px-3 py-1.5 rounded-sm ring-1 ring-ink"
            >
              Visit
            </a>
          </div>
        </div>
      </nav>

      <section className="py-12 bg-canvas">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-ink/60 font-medium">
              Est. 2018 — London
            </span>
            <h1 className="text-4xl font-serif font-medium leading-tight text-balance">
              The weight of the dough, the heat of the stone.
            </h1>
          </div>

          <img
            src={heroSourdough}
            alt="Freshly torn country sourdough loaf on a flour-dusted wooden board"
            width={800}
            height={1008}
            className="w-full aspect-[4/5] object-cover bg-kraft rounded-md outline-1 -outline-offset-1 outline-ink/5"
          />

          <p className="text-base leading-relaxed text-pretty max-w-[56ch] text-ink/80">
            We specialize in long-fermentation sourdough and laminated pastries, baked fresh every
            morning using stone-ground heritage grains from local mills.
          </p>

          <div className="flex gap-3">
            <a
              href="#menu"
              className="group flex items-center bg-ink text-canvas py-2 pr-3 pl-2 rounded-sm ring-1 ring-ink transition-transform active:scale-[0.98]"
            >
              <svg
                className="size-4 shrink-0 mr-2 opacity-80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="text-sm font-medium">Order for collection</span>
            </a>
          </div>
        </div>
      </section>

      <section id="menu" className="py-16 bg-kraft/30 border-y border-ink/5">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col gap-8">
            <div className="flex justify-between items-end border-b border-ink/10 pb-4">
              <h2 className="text-2xl font-serif font-medium">Today's Signatures</h2>
              <span className="text-xs font-medium uppercase tracking-widest text-ink/40">
                Refreshed Daily
              </span>
            </div>

            <div className="flex flex-col gap-8">
              {signatures.map((item) => (
                <div key={item.name} className="flex justify-between items-start gap-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-sm text-ink/60 max-w-[40ch]">{item.note}</p>
                  </div>
                  <span className="font-serif italic text-lg">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col gap-10">
          <div className="grid gap-6">
            <h2 className="text-3xl font-serif font-medium leading-tight text-balance">
              Patience as an ingredient
            </h2>
            <p className="text-base leading-relaxed text-pretty max-w-[56ch] text-ink/80">
              Our flour is stone-ground specifically for our bakery, preserving the natural oils and
              nutrients often lost in industrial milling. We don't use commercial yeast; our starters
              have been alive since we first opened our doors.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <img
              src={craftScoring}
              alt="Flour-dusted hands scoring a loaf of bread dough"
              width={600}
              height={600}
              loading="lazy"
              className="aspect-square w-full object-cover bg-kraft rounded-md outline-1 -outline-offset-1 outline-ink/5"
            />
            <img
              src={craftOven}
              alt="Hot loaves coming out of a stone deck oven"
              width={600}
              height={600}
              loading="lazy"
              className="aspect-square w-full object-cover bg-kraft rounded-md outline-1 -outline-offset-1 outline-ink/5"
            />
          </div>
        </div>
      </section>

      <section id="visit" className="py-16 bg-ink text-canvas rounded-t-2xl">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col gap-12">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-canvas/50 font-medium">
                The Bakery
              </span>
              <address className="text-lg leading-snug font-serif not-italic">
                128 Artisans Row
                <br />
                Hackney, London
                <br />
                E8 4PT
              </address>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest text-canvas/50 font-medium">
                Service Hours
              </span>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-sm border-b border-canvas/10 pb-2">
                  <span>Mon — Fri</span>
                  <span>07:30 — 15:00</span>
                </div>
                <div className="flex justify-between text-sm border-b border-canvas/10 pb-2">
                  <span>Sat — Sun</span>
                  <span>08:30 — 16:00</span>
                </div>
                <p className="text-[11px] italic text-canvas/40">
                  Or until the last loaf is gone.
                </p>
              </div>
            </div>
          </div>

          <footer className="pt-8 border-t border-canvas/5 flex justify-between items-center">
            <span className="text-[10px] uppercase tracking-widest text-canvas/30">
              © 2026 Bakers Hub
            </span>
            <div className="flex gap-4">
              <span className="text-[10px] uppercase tracking-widest text-canvas/30">Instagram</span>
              <span className="text-[10px] uppercase tracking-widest text-canvas/30">Notes</span>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
