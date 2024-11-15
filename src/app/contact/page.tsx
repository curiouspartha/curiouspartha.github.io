import { FC } from 'react';

const Contact: FC = () => {
  return (
    <div className="min-h-screen">
      <section className="section-padding flex items-center min-h-[calc(100vh-4rem)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent text-center">
            Contact Me
          </h1>

          <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed mb-12 text-center">
            I am eager to collaborate and bring your vision to life. Feel free to reach out through 
            the form below or connect with me on social media.
          </p>

          {/* Contact Form */}
          <div className="card mb-12">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-foreground/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 
                    focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent
                    text-foreground"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-foreground/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 
                    focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent
                    text-foreground"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-foreground/80 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 
                    focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent
                    text-foreground resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-background px-8 py-3 
                  rounded-full font-medium transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-accent">Connect With Me</h2>
            <div className="space-y-2">
              <p className="text-foreground/80">
                Email: <a href="mailto:your.email@example.com" className="text-accent hover:text-accent/80">
                  your.email@example.com
                </a>
              </p>
              <p className="text-foreground/80">
                LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" 
                  className="text-accent hover:text-accent/80">
                  linkedin.com/in/yourprofile
                </a>
              </p>
              <p className="text-foreground/80">
                GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
                  className="text-accent hover:text-accent/80">
                  github.com/yourusername
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 