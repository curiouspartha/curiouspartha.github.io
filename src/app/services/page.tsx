export default function Services() {
  return (
    <div className="min-h-screen">
      <section className="section-padding flex items-center min-h-[calc(100vh-4rem)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gradient text-center">
            Services
          </h1>

          {/* Introduction */}
          <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed mb-12 text-center">
            I offer a range of consultancy services tailored to meet your specific needs.
          </p>

          {/* Services Grid */}
          <div className="space-y-8">
            <div className="card">
              <h2 className="text-2xl font-bold mb-4 text-accent">Cloud Architecture Design in AWS</h2>
              <p className="text-foreground/80 leading-relaxed">
                Leveraging AWS&apos;s robust suite of services, I design scalable, secure, and efficient 
                cloud architectures that align with your business objectives. My approach ensures 
                optimal performance, cost-effectiveness, and adherence to best practices.
              </p>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold mb-4 text-accent">Backend API Development with Integrations</h2>
              <p className="text-foreground/80 leading-relaxed">
                Specializing in creating robust backend APIs, I facilitate seamless communication 
                between diverse systems. My expertise includes integrating third-party services, 
                ensuring data consistency, and enhancing overall system functionality.
              </p>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold mb-4 text-accent">Full Stack Web Development</h2>
              <p className="text-foreground/80 leading-relaxed">
                From conceptualization to deployment, I develop comprehensive web applications 
                that provide intuitive user experiences. My proficiency spans both frontend 
                and backend technologies, ensuring cohesive and responsive solutions.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-foreground/80 mb-6">
              Ready to transform your ideas into reality?
            </p>
            <a 
              href="/contact" 
              className="bg-accent hover:bg-accent/90 text-background px-8 py-3 rounded-full font-medium transition-colors inline-block"
            >
              Let&apos;s Discuss Your Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 