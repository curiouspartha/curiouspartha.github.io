import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="section-padding flex items-center min-h-[calc(100vh-4rem)]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent text-center">
            About Me
          </h1>

          {/* Introduction */}
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-12 text-center">
            My journey in the tech industry has been both diverse and enriching. Over the years, 
            I have honed my skills in full-stack development, focusing on backend engineering 
            and cloud infrastructure.
          </p>

          {/* Expertise Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-accent">Node.js Development</h3>
              <p className="text-white/80">
                Proficiency in Node.js for building robust server-side applications.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-accent">AWS Services</h3>
              <p className="text-white/80">
                Extensive experience with AWS services, ensuring scalable and secure cloud deployments.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-accent">Cloud Architecture</h3>
              <p className="text-white/80">
                A deep understanding of cloud-native architectures, promoting agility and resilience.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="card mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">Education & Background</h2>
            <p className="text-white/80 leading-relaxed">
              I hold a [relevant degree/certification] and have continuously updated my knowledge 
              to stay abreast of the latest industry trends.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a 
              href="/contact" 
              className="bg-accent hover:bg-accent/90 text-background px-8 py-3 rounded-full font-medium transition-colors inline-block"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 