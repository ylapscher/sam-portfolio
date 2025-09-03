export function Footer() {
  return (
    <footer className="bg-primary text-white py-8 md:py-12">
      <div className="container mx-auto px-6 md:px-8 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm">
          <a href="mailto:sastreitman@gmail.com" className="underline hover:no-underline transition-all">
            sastreitman@gmail.com
          </a>
          <span className="hidden sm:inline">|</span>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline transition-all"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
