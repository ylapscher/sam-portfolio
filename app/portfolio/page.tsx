import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export default function PortfolioPage() {
  const allProjects = [
    {
      id: 1,
      title: "UX Design System",
      image: "/ux-design-wireframes-and-user-interface-mockups.png",
      link: "https://example.com/project1",
      description: "Comprehensive design system for enterprise application",
      category: "UX Design",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      image: "/mobile-app-interface-design-and-user-flow-diagrams.jpg",
      link: "https://example.com/project2",
      description: "User-centered mobile banking experience redesign",
      category: "Mobile Design",
    },
    {
      id: 3,
      title: "Data Dashboard",
      image: "/user-research-dashboard-and-data-visualization.jpg",
      link: "https://example.com/project3",
      description: "Analytics dashboard with improved data visualization",
      category: "Data Visualization",
    },
    {
      id: 4,
      title: "E-commerce Platform",
      image: "/ecommerce-platform-design.png",
      link: "https://example.com/project4",
      description: "Complete redesign of online shopping experience",
      category: "Web Design",
    },
    {
      id: 5,
      title: "Healthcare App",
      image: "/healthcare-mobile-app.png",
      link: "https://example.com/project5",
      description: "Patient portal and appointment scheduling system",
      category: "Healthcare",
    },
    {
      id: 6,
      title: "Financial Dashboard",
      image: "/financial-dashboard.png",
      link: "https://example.com/project6",
      description: "Investment tracking and portfolio management tool",
      category: "Fintech",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="container mx-auto px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-serif text-center mb-4 text-gray-800">Portfolio</h1>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            A collection of UX design projects showcasing user-centered solutions across various industries and
            platforms.
          </p>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                          {project.category}
                        </span>
                      </div>
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <h3 className="text-lg font-medium text-gray-800 mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
