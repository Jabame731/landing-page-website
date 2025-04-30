// app/components/GetQuoteAndContact.tsx

import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function GetQuoteAndContact() {
  return (
    <section className="w-full py-20 px-4 bg-muted">
      <div className="container mx-auto max-w-6xl grid gap-16 lg:grid-cols-2 items-start">
        {/* Get a Quote */}
        <div>
          <div className="flex items-center gap-2 mb-4 text-primary">
            <ShieldCheck size={28} />
            <h2 className="text-3xl font-bold text-gray-900">Get a Quote</h2>
          </div>

          <p className="text-muted-foreground mb-6">
            Need security services? Call us now. We'll assess your needs and
            send over a detailed proposal. Once approved, we’ll deploy the guard
            team.
          </p>

          {/* <Button variant="default" size="lg">
            Call Us to Get Started
          </Button> */}
        </div>

        {/* Contact Us */}
        <div className="bg-white p-8 rounded-xl shadow-md w-full">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Contact Us
          </h3>

          <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-primary" />
              +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              contact@secureguard.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              123 Security Blvd, Suite 101, Your City
            </li>
          </ul>

          <form className="space-y-4">
            <Input placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Textarea placeholder="Your Message" rows={4} required />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
