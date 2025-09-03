import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  const portfolioProjects = [
    {
      id: 1,
      title: "UX Design System",
      image: "/ux-design-wireframes-and-user-interface-mockups.png",
      link: "https://example.com/project1",
      description: "Comprehensive design system for enterprise application",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      image: "/mobile-app-interface-design-and-user-flow-diagrams.jpg",
      link: "https://example.com/project2",
      description: "User-centered mobile banking experience redesign",
    },
    {
      id: 3,
      title: "Data Dashboard",
      image: "/user-research-dashboard-and-data-visualization.jpg",
      link: "https://example.com/project3",
      description: "Analytics dashboard with improved data visualization",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <main className="container mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto">
          {/* Hero Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <Image
                src="/woman-with-long-hair-in-nature-mountain-landscape.jpg"
                alt="Sam Streitman portrait in nature with mountain landscape"
                width={600}
                height={700}
                className="rounded-2xl w-full h-auto shadow-lg"
                priority
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
            <div>
              <h1 className="text-sm font-medium text-gray-500 mb-3 md:mb-4 tracking-wide">Hello, I'm Sam!</h1>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light">
                Experienced UX leader with 7+ years in user-centered design, prototyping, and UX research. Proven track
                record in leading cross-functional teams to create innovative solutions that align with business goals.
                Passionate about inclusive and data-driven design, skilled in usability testing, and committed to
                enhancing user satisfaction through holistic design thinking.
              </p>
            </div>

            <Link href="/resume">
              <Button
                variant="outline"
                className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-medium transition-all duration-200 bg-transparent"
              >
                Resume
              </Button>
            </Link>
          </div>
        </div>

        {/* Recent Work Section */}
        <section className="mt-24 md:mt-32">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-12 md:mb-16 text-gray-800">Recent Work</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {portfolioProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-4 md:p-6">
                      <h3 className="text-base md:text-lg font-medium text-gray-800 mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
            >
              View All Work
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
