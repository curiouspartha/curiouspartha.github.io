export default function About() {
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
          <span className="inline-block text-accent/80 font-medium px-4 py-2 bg-accent/10 rounded-full mb-4">
            Hello, nice to meet you! 👋
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient">
            About Me
          </h1>
          <p className="text-lg sm:text-xl text-content max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Full Stack Engineer who believes in the perfect blend of creativity and technical expertise. 
            With a keen eye for detail and a love for clean code, I transform complex challenges into elegant solutions.
          </p>
        </div>

        {/* Values Section - New! */}
        <div className="grid gap-8 md:grid-cols-3 mb-20">
          <div className="card hover:-translate-y-2 transition-transform text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4 mx-auto">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Quality First</h3>
            <p className="text-content">
              Every line of code is crafted with precision and care, ensuring scalable and maintainable solutions.
            </p>
          </div>

          <div className="card hover:-translate-y-2 transition-transform text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 mx-auto">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Innovation Driven</h3>
            <p className="text-content">
              Constantly exploring new technologies and approaches to deliver cutting-edge solutions.
            </p>
          </div>

          <div className="card hover:-translate-y-2 transition-transform text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4 mx-auto">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Clear Communication</h3>
            <p className="text-content">
              Believing in transparent collaboration and keeping stakeholders informed every step of the way.
            </p>
          </div>
        </div>

        <div className="space-y-20">
          {/* Experience Timeline */}
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gradient text-center mb-12">
              Professional Journey
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="card hover:-translate-y-2 transition-transform">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4 mx-auto">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Full Stack Development</h3>
                <p className="text-content">
                  Building end-to-end solutions with modern technologies and best practices.
                </p>
              </div>

              <div className="card hover:-translate-y-2 transition-transform">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 mx-auto">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Cloud Architecture</h3>
                <p className="text-content">
                  Designing and implementing scalable cloud solutions on AWS.
                </p>
              </div>

              <div className="card hover:-translate-y-2 transition-transform">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4 mx-auto">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Security Focus</h3>
                <p className="text-content">
                  Implementing robust security measures and best practices.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gradient text-center mb-12">
              Core Competencies
            </h2>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="card hover:-translate-y-2 transition-transform">
                <h3 className="text-xl font-bold mb-4">Frontend Ecosystem</h3>
                <ul className="space-y-2 text-content">
                  <li>React & Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Modern CSS & Animations</li>
                  <li>Performance Optimization</li>
                </ul>
              </div>

              <div className="card hover:-translate-y-2 transition-transform">
                <h3 className="text-xl font-bold mb-4">Backend Development</h3>
                <ul className="space-y-2 text-content">
                  <li>Node.js & Express</li>
                  <li>RESTful APIs</li>
                  <li>GraphQL</li>
                  <li>PostgreSQL & MongoDB</li>
                  <li>API Security & Authentication</li>
                </ul>
              </div>

              <div className="card hover:-translate-y-2 transition-transform">
                <h3 className="text-xl font-bold mb-4">Cloud & DevOps</h3>
                <ul className="space-y-2 text-content">
                  <li>AWS Services</li>
                  <li>Docker & Kubernetes</li>
                  <li>CI/CD Pipelines</li>
                  <li>Infrastructure as Code</li>
                  <li>Monitoring & Logging</li>
                </ul>
              </div>

              <div className="card hover:-translate-y-2 transition-transform">
                <h3 className="text-xl font-bold mb-4">Architecture</h3>
                <ul className="space-y-2 text-content">
                  <li>Microservices</li>
                  <li>Serverless Architecture</li>
                  <li>System Design</li>
                  <li>Database Design</li>
                  <li>Performance Optimization</li>
                </ul>
              </div>

              <div className="card hover:-translate-y-2 transition-transform">
                <h3 className="text-xl font-bold mb-4">Best Practices</h3>
                <ul className="space-y-2 text-content">
                  <li>Clean Code</li>
                  <li>Test-Driven Development</li>
                  <li>Code Review</li>
                  <li>Documentation</li>
                  <li>Agile Methodologies</li>
                </ul>
              </div>

              <div className="card hover:-translate-y-2 transition-transform">
                <h3 className="text-xl font-bold mb-4">Tools & Workflow</h3>
                <ul className="space-y-2 text-content">
                  <li>Git & Version Control</li>
                  <li>Jira & Project Management</li>
                  <li>VS Code & IDE Setup</li>
                  <li>Terminal & Shell Scripting</li>
                  <li>Development Workflows</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold">Ready to Collaborate?</h2>
            <p className="text-content max-w-2xl mx-auto">
              I&apos;m always interested in hearing about new projects and opportunities.
            </p>
            <a 
              href="/contact"
              className="inline-block px-8 py-3 rounded-full bg-accent hover:bg-accent/90 
                text-background font-medium transition-all duration-300
                hover:shadow-[0_0_2rem_-0.5rem_rgb(var(--accent))]"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 