import { ShieldCheck, Users, Eye, AlarmClock, MapPin } from "lucide-react";

const services = [
  {
    title: "Armed & Unarmed Guards",
    icon: ShieldCheck,
    description:
      "Highly trained, licensed personnel available for property, event, or personal security.",
  },
  {
    title: "Event Security",
    icon: Users,
    description:
      "Crowd management, access control, and threat mitigation for all event sizes.",
  },
  {
    title: "Surveillance & Monitoring",
    icon: Eye,
    description:
      "24/7 live monitoring and remote surveillance systems to deter and detect threats.",
  },
  {
    title: "Rapid Response Patrols",
    icon: AlarmClock,
    description:
      "Mobile patrols for neighborhoods, warehouses, or businesses needing round-the-clock safety.",
  },
  {
    title: "VIP/Executive Protection",
    icon: MapPin,
    description:
      "Discreet, professional protection for high-profile clients and corporate executives.",
  },
];

export default function Services() {
  return (
    <section className="w-full bg-muted py-20 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        {/* <Badge className="mb-4 text-sm tracking-wide uppercase bg-primary text-white">
          Our Services
        </Badge> */}

        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          Comprehensive Security Solutions
        </h2>

        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
          Whether you need residential, commercial, or event-based protection,
          our certified professionals are equipped to keep you safe.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {services.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
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
