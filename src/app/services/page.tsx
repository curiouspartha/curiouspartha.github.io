export default function Services() {
  return (
    <div className="min-h-[calc(100vh-8rem)] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Enhanced background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[160px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[160px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[180px]" />
        </div>

        {/* Hero Section with Animation */}
        <div className="text-center space-y-8 mb-24 animate-fade-in">
          <span className="inline-block text-accent/80 font-medium px-4 py-2 bg-accent/10 rounded-full">
            Expert Solutions for Modern Challenges 🚀
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient">
            Services & Expertise
          </h1>
          <p className="text-lg sm:text-xl text-content max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into powerful digital solutions through dedicated collaboration 
            and technical excellence. Let&apos;s build something extraordinary together.
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-24">
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              ),
              title: "Full Stack Development",
              description: "End-to-end web applications built with modern technologies and best practices.",
              features: ["React & Next.js", "TypeScript", "Node.js", "Database Design"],
              color: "accent"
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              ),
              title: "Cloud Architecture",
              description: "Scalable cloud solutions designed for optimal performance and security.",
              features: ["AWS Infrastructure", "Serverless", "Cloud Migration", "DevOps"],
              color: "primary"
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              ),
              title: "API Development",
              description: "Robust and scalable API solutions for seamless integration.",
              features: ["RESTful APIs", "GraphQL", "Security", "Documentation"],
              color: "accent"
            }
          ].map((service, index) => (
            <div key={index} className="group">
              <div className="h-full card hover:-translate-y-2 transition-all duration-500 
                backdrop-blur-xl bg-gradient-to-br from-background/50 to-background/30
                hover:shadow-lg hover:shadow-accent/5">
                <div className={`w-14 h-14 mb-6 rounded-2xl bg-${service.color}/10 
                  text-${service.color} flex items-center justify-center
                  group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-content mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <svg className={`w-5 h-5 text-${service.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-content">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Me Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gradient text-center mb-12">
            Why Work With Me?
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card bg-gradient-to-br from-accent/5 to-primary/5 hover:-translate-y-2 transition-all duration-500">
              <h3 className="text-xl font-bold mb-6 text-gradient">My Commitment</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-content">Exclusive focus - I work with only one client at a time</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-content">No cure, no pay - Your satisfaction is guaranteed</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-content">Dedicated one-on-one attention throughout the project lifecycle</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-content">Clear communication and transparent expectations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-content">Quality-focused development with attention to detail</span>
                </li>
              </ul>
            </div>
            <div className="card bg-gradient-to-br from-primary/5 to-accent/5 hover:-translate-y-2 transition-all duration-500">
              <h3 className="text-xl font-bold mb-6 text-gradient">The Experience</h3>
              <p className="text-content leading-relaxed mb-6">
                Working with me means getting a dedicated partner who is invested in your success. 
                I bring not just technical expertise, but also a deep understanding of business needs 
                and user experience.
              </p>
              <a 
                href="/contact"
                className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors"
              >
                <span>Let&apos;s discuss your project</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* My Approach Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gradient text-center mb-16">
            My Approach
          </h2>
          <div className="max-w-3xl mx-auto space-y-12">
            {[
              {
                number: "01",
                title: "Discovery",
                description: "Understanding your needs and project requirements through in-depth consultation. We&apos;ll discuss your goals, challenges, and vision to ensure perfect alignment.",
              },
              {
                number: "02",
                title: "Planning",
                description: "Developing a comprehensive strategy and roadmap. I&apos;ll outline the technical approach, timeline, and deliverables to set clear expectations and ensure success.",
              },
              {
                number: "03",
                title: "Execution",
                description: "Building your solution with regular updates and transparent communication. You&apos;ll always know the project status and have opportunities for feedback and adjustments.",
              },
              {
                number: "04",
                title: "Support",
                description: "Providing ongoing maintenance and improvements after launch. I remain committed to your project&apos;s success with continued support and optimization.",
              }
            ].map((step) => (
              <div key={step.number} className="flex gap-6 group">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center
                    font-mono text-lg font-bold text-accent border border-accent/20
                    group-hover:scale-110 transition-all duration-500">
                    {step.number}
                  </div>
                  {step.number !== "04" && (
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[2px] h-[calc(100%+3rem)]
                      bg-gradient-to-b from-accent/20 to-transparent" />
                  )}
                </div>
                <div className="space-y-2 pt-2">
                  <h3 className="text-xl font-bold text-gradient">{step.title}</h3>
                  <p className="text-content leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="text-content max-w-2xl mx-auto">
            Let&apos;s transform your vision into reality. Contact me to discuss your project 
            and explore how we can work together.
          </p>
          <a 
            href="/contact"
            className="inline-block px-8 py-4 rounded-full bg-accent hover:bg-accent/90 
              text-background font-medium transition-all duration-500
              hover:shadow-[0_0_3rem_-0.5rem_rgb(var(--accent))]"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  );
}