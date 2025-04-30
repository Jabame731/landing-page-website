export default function Aboutus() {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        {/* <Badge className="mb-4 text-sm tracking-wide uppercase bg-primary text-white">
          About us
        </Badge> */}
      </div>

      <div className="container mx-auto ">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          Your Trusted Security Partner
        </h2>

        <p className="text-lg text-muted-foreground max-w-3xl mb-10">
          With over a decade of experience in the security industry, we are
          committed to protecting what matters most. Our team of certified
          professionals delivers 24/7 security services for homes, businesses,
          and events with unmatched professionalism and precision.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 text-left">
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              10+ Years of Experience
            </h3>
            <p className="text-sm text-gray-600">
              Proven track record in providing reliable, on-site protection
              across multiple industries.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Certified & Licensed Team
            </h3>
            <p className="text-sm text-gray-600">
              Our security personnel are fully trained, background-checked, and
              certified to handle any situation.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Customized Security Plans
            </h3>
            <p className="text-sm text-gray-600">
              We tailor security strategies based on your environment, risk
              level, and specific needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
