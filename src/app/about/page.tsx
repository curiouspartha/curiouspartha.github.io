export default function About() {
  return (
    <div className="min-h-screen">
      <section className="section-padding flex items-center min-h-[calc(100vh-4rem)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gradient text-center">
            About Me
          </h1>

          <p className="text-lg sm:text-xl text-content leading-relaxed mb-12 text-center">
            My journey in the tech industry has been both diverse and enriching. Over the years, 
            I have honed my skills in full-stack development, focusing on backend engineering 
            and cloud infrastructure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="card">
              <h3>Node.js Development</h3>
              <p className="text-content">
                Proficiency in Node.js for building robust server-side applications.
              </p>
            </div>
            <div className="card">
              <h3>AWS Services</h3>
              <p className="text-content">
                Extensive experience with AWS services, ensuring scalable and secure cloud deployments.
              </p>
            </div>
            <div className="card">
              <h3>Cloud Architecture</h3>
              <p className="text-content">
                A deep understanding of cloud-native architectures, promoting agility and resilience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 