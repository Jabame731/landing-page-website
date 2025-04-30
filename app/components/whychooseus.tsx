import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Clock, Users, ThumbsUp } from "lucide-react";

const features = [
  {
    title: "Licensed & Certified Team",
    description:
      "Our personnel are fully vetted, trained, and certified for professional-grade protection.",
    icon: ShieldCheck,
  },
  {
    title: "24/7 Availability",
    description:
      "We're always on — day or night. Our teams are ready to respond immediately.",
    icon: Clock,
  },
  {
    title: "Tailored Security Plans",
    description:
      "Every client gets a custom solution built to their specific risk profile and needs.",
    icon: Users,
  },
  {
    title: "Trusted by Businesses",
    description:
      "From retail to corporate — we’ve protected hundreds of clients who continue to rely on us.",
    icon: ThumbsUp,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        {/* <Badge className="mb-4 text-sm tracking-wide uppercase bg-primary text-white">
          Why Choose Us
        </Badge> */}

        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          Reliable. Responsive. Respected.
        </h2>

        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
          Discover what makes us the preferred security partner for businesses,
          events, and private clients across the region.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
          {features.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="bg-muted/30 p-6 rounded-2xl hover:shadow-md transition"
            >
              <div className="mb-4 flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                <Icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
