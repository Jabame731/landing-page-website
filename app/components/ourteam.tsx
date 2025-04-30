import Image from "next/image";

const team = [
  {
    name: "James Carter",
    role: "Chief Security Officer",
    image: "/images/sample_image.jpg", // Place in /public/images
  },
  {
    name: "Samantha Lee",
    role: "Operations Manager",
    image: "/images/sample_image.jpg",
  },
  {
    name: "Robert Kim",
    role: "Senior Field Supervisor",
    image: "/images/sample_image.jpg",
  },
  {
    name: "Maria Lopez",
    role: "Client Relations Lead",
    image: "/images/sample_image.jpg",
  },
];

export default function OurTeam() {
  return (
    <section className="w-full bg-muted py-20 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        {/* <Badge className="mb-4 text-sm tracking-wide uppercase bg-primary text-white">
          Meet Our Team
        </Badge> */}

        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          Professionals Behind Our Protection
        </h2>

        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
          Our success is built on the strength, training, and dedication of our
          team. Meet the people who make it happen every day.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-left">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center"
            >
              <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 border-4 border-primary/30">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
