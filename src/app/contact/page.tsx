import { FC } from 'react';

const Contact: FC = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16">
          <span className="inline-block text-accent/80 font-medium px-4 py-2 bg-accent/10 rounded-full">
            Based in Amsterdam, NL 🌟
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
            Let&apos;s Build Something Together
          </h1>
          <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Whether you have a project in mind or just want to chat about technology, 
            I&apos;m always excited to connect with fellow developers and innovators.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Calendly Card */}
          <div className="card p-8 bg-gradient-to-br from-accent/5 via-primary/5 to-accent/5 
            border border-accent/10 rounded-2xl hover:border-accent/20 transition-all duration-300
            hover:shadow-xl hover:shadow-accent/5">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-accent" fill="none" 
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Schedule a Call</h2>
                <p className="text-foreground/70">
                  Book a time that works best for you to discuss your project ideas and requirements.
                </p>
              </div>
              <div className="bg-background/50 p-6 rounded-xl border border-accent/10">
                <p className="font-medium text-accent mb-2">Coming Soon!</p>
                <p className="text-sm text-foreground/60">
                  Calendly integration will be available shortly for easy scheduling.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Connect Card */}
          <div className="card p-8 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 
            border border-primary/10 rounded-2xl hover:border-primary/20 transition-all duration-300
            hover:shadow-xl hover:shadow-primary/5">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" 
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Quick Connect</h2>
                <p className="text-foreground/70">
                  Reach out directly through email or connect with me on LinkedIn.
                </p>
              </div>
              <div className="space-y-3">
                <a href="mailto:hello@parthu.dev" 
                  className="flex items-center space-x-3 p-4 rounded-xl bg-background/50 
                    hover:bg-background/70 transition-all duration-300 group border border-primary/10
                    hover:border-primary/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" 
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-foreground/80 group-hover:text-foreground transition-colors">
                    hello@parthu.dev
                  </span>
                </a>
                <a href="https://www.linkedin.com/in/parthasarathy-b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 rounded-xl bg-background/50 
                    hover:bg-background/70 transition-all duration-300 group border border-primary/10
                    hover:border-primary/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="currentColor" 
                    viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span className="text-foreground/80 group-hover:text-foreground transition-colors">
                    Connect on LinkedIn
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Response Time Indicator */}
        <div className="mt-12 text-center">
          <p className="inline-flex items-center px-4 py-2 rounded-full bg-background/50 text-sm text-foreground/60">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Usually responds within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact; 