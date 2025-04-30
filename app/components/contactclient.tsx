import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactClient() {
  return (
    <>
      <main className="container max-w-7xl mx-auto px-4 py-10">
        {/* <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1> */}

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-4">
            <p className="text-lg">
              Got a question? Need a custom security solution? Reach out —
              we&apos;re ready to help.
            </p>
            <div>
              <h2 className="text-xl font-semibold">Head Office</h2>
              <p>
                123 Secure Blvd, Suite 100
                <br />
                Cityname, ST 45678
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Phone</h2>
              <p className="text-blue-600">+1 (123) 456-7890</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Email</h2>
              <p className="text-blue-600">info@secureagency.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4 bg-gray-100 p-6 rounded-xl shadow-md">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" type="text" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={5} required />
            </div>

            <Button type="submit">Send Message</Button>
          </form>
        </div>

        <div className="mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.3426820184695!2d123.97501387570044!3d10.394333766123939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9bd141b42a76f%3A0xe0002625c963f1ea!2sTRI-J%20SECURITY%20AGENCY!5e0!3m2!1sen!2sph!4v1745990133713!5m2!1sen!2sph"
            width="100%"
            height="400"
            className="rounded-md border"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </main>
    </>
  );
}
