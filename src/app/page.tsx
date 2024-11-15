export default function Home() {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-accent/30 rounded-full blur-[128px]" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary/30 rounded-full blur-[128px]" />
        </div>

        {/* Main content */}
        <div className="space-y-16">
          {/* Hero section */}
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <p className="text-accent/80 font-medium">Hi, I&apos;m Parthu 👋</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-gradient">Full Stack Engineer</span>
                <br />
                Crafting Digital Experiences
              </h1>
              <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed">
                I&apos;m a Full Stack Engineer with a passion for crafting scalable and efficient solutions. 
                With a strong foundation in Node.js, AWS, and cloud-native technologies, 
                I&apos;m dedicated to transforming complex challenges into streamlined, user-centric applications.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="/contact" 
                className="px-8 py-3 rounded-full bg-accent hover:bg-accent/90 
                  text-background font-medium transition-all duration-300
                  hover:shadow-[0_0_2rem_-0.5rem_rgb(var(--accent))]"
              >
                Let&apos;s Collaborate
              </a>
              <a 
                href="/about" 
                className="px-8 py-3 rounded-full border border-foreground/10 
                  hover:bg-foreground/5 font-medium transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
