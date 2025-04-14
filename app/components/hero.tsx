import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full bg-gray-900 text-white overflow-hidden h-[90vh] flex items-center">
      <div
        className="absolute inset-0 z-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/place.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl px-4">
        <span className="text-sm uppercase tracking-widest text-primary font-semibold mb-2 block text-yellow-100">
          Trusted Protection
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Professional Security Solutions You Can Rely On
        </h1>
        <p className="text-lg text-muted-foreground mb-8 text-white/80">
          Our trained experts are ready 24/7 to protect your home, business, and
          assets with top-tier security services.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">Get Protected</Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
