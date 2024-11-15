export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="section-padding flex items-center min-h-[calc(100vh-4rem)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gradient text-center">
            Welcome to my professional space
          </h1>
          <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed">
            I am a Full Stack Engineer with a passion for crafting scalable and efficient solutions. 
            With a strong foundation in Node.js, AWS, and cloud-native technologies, 
            I am dedicated to transforming complex challenges into streamlined, user-centric applications.
          </p>
          <div className="mt-12">
            <a 
              href="/contact" 
              className="bg-accent hover:bg-accent/90 text-background px-8 py-3 rounded-full font-medium transition-colors"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
