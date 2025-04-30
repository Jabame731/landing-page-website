"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState } from "react";

export default function CarrersClient() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        We Are Hiring Security Guards!
      </h1>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left: Info + Guard Image */}
        <div className="space-y-6">
          <Image
            src="/images/guard_uniform.png" // Place your guard image in /public/images/
            alt="Security Guard"
            width={600}
            height={400}
          />

          <div>
            <h2 className="text-2xl font-semibold mb-2">Qualifications:</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Male or Female</li>
              <li>At least 21–45 years of age</li>
              <li>Minimum 1 year experience</li>
              <li>Knowledge of firearm handling</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Requirements:</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Bring 201 File</li>
              <li>High School Diploma / TOR</li>
              <li>Biodata / Resume with 1x1 white background photo</li>
              <li>National Police Clearance</li>
              <li>Drug Test Certificate</li>
              <li>Two valid IDs</li>
              <li>Birth Certificate</li>
            </ul>
          </div>
        </div>

        {/* Right: Application Form */}
        <form className="space-y-5 bg-gray-50 p-6 rounded-xl shadow-md w-full">
          <h2 className="text-2xl font-bold mb-4">Apply Now</h2>

          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" type="text" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="resume">Upload Resume / Biodata</Label>
            <Input
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Short Message / Experience Summary</Label>
            <Textarea id="message" rows={5} />
          </div>

          <Button type="submit">Submit Application</Button>
        </form>
      </div>
    </section>
  );
}
