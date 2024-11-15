export default function Services() {
  return (
    <div className="min-h-[calc(100vh-8rem)] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-accent/30 rounded-full blur-[128px]" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[128px]" />
        </div>

        {/* Hero Section */}
        <div className="text-center space-y-6 mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient">
            Services
          </h1>
          <p className="text-lg sm:text-xl text-content max-w-3xl mx-auto leading-relaxed">
            I&apos;m ready to help bring your vision to life with comprehensive solutions 
            tailored to your needs. From concept to deployment, I ensure quality, 
            scalability, and excellence in every project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 mb-20">
          {/* Full Stack Development */}
          <div className="card group hover:-translate-y-2 transition-all">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 rounded-2xl bg-accent/10 text-accent">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                  Full Stack Development
                </h3>
                <p className="text-content">
                  End-to-end web application development using modern technologies and best practices.
                </p>
                <ul className="space-y-2 text-content">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Custom Web Applications
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Responsive Design
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Progressive Web Apps
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cloud Architecture */}
          <div className="card group hover:-translate-y-2 transition-all">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 rounded-2xl bg-primary/10 text-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  Cloud Architecture
                </h3>
                <p className="text-content">
                  Scalable and secure cloud solutions designed for optimal performance.
                </p>
                <ul className="space-y-2 text-content">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    AWS Infrastructure
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Serverless Solutions
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Cloud Migration
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* API Development */}
          <div className="card group hover:-translate-y-2 transition-all">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 rounded-2xl bg-accent/10 text-accent">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                  API Development
                </h3>
                <p className="text-content">
                  Robust and scalable API solutions for seamless integration.
                </p>
                <ul className="space-y-2 text-content">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    RESTful APIs
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    GraphQL
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    API Security
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Third party integrations
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* DevOps & CI/CD */}
          <div className="card group hover:-translate-y-2 transition-all">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 rounded-2xl bg-primary/10 text-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  DevOps & CI/CD
                </h3>
                <p className="text-content">
                  Streamlined development operations and automated deployment pipelines.
                </p>
                <ul className="space-y-2 text-content">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Automated Deployments
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Infrastructure as Code
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Monitoring & Logging
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="space-y-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gradient">
            My Approach
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Discovery",
                description: "Understanding your needs and project requirements"
              },
              {
                title: "Planning",
                description: "Developing a comprehensive strategy and roadmap"
              },
              {
                title: "Execution",
                description: "Building your solution with regular updates"
              },
              {
                title: "Support",
                description: "Ongoing maintenance and improvements"
              }
            ].map((step, index) => (
              <div key={index} className="card hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-accent mb-2">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-content text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Ready to Start Your Project?</h2>
          <p className="text-content max-w-2xl mx-auto">
            Let&apos;s discuss how I can help bring your vision to life.
          </p>
          <a 
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-accent hover:bg-accent/90 
              text-background font-medium transition-all duration-300
              hover:shadow-[0_0_2rem_-0.5rem_rgb(var(--accent))]"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}