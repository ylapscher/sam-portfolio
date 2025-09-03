import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function ArtPage() {
  const artworks = [
    {
      id: 1,
      title: "Blue Butterfly Watercolor",
      image: "/art/blue-butterfly-watercolor.jpg",
      medium: "Watercolor",
      size: "large",
    },
    {
      id: 2,
      title: "Mountain Landscape",
      image: "/art/mountain-landscape-painting.jpg",
      medium: "Acrylic",
      size: "medium",
    },
    {
      id: 3,
      title: "Abstract Florals",
      image: "/art/abstract-floral-painting.jpg",
      medium: "Mixed Media",
      size: "medium",
    },
    {
      id: 4,
      title: "Succulent Study",
      image: "/art/succulent-botanical-study.jpg",
      medium: "Watercolor",
      size: "small",
    },
    {
      id: 5,
      title: "Ocean Waves",
      image: "/art/ocean-waves-painting.jpg",
      medium: "Oil",
      size: "large",
    },
    {
      id: 6,
      title: "Bird of Paradise",
      image: "/art/bird-of-paradise-flower.jpg",
      medium: "Watercolor",
      size: "medium",
    },
    {
      id: 7,
      title: "Architectural Study",
      image: "/art/architectural-building-study.jpg",
      medium: "Graphite",
      size: "medium",
    },
    {
      id: 8,
      title: "Coastal Rocks",
      image: "/art/coastal-rocks-seascape.jpg",
      medium: "Acrylic",
      size: "large",
    },
    {
      id: 9,
      title: "Swimming Figure",
      image: "/art/swimming-figure-study.jpg",
      medium: "Charcoal",
      size: "medium",
    },
    {
      id: 10,
      title: "Abstract Composition",
      image: "/art/abstract-geometric-composition.jpg",
      medium: "Mixed Media",
      size: "small",
    },
    {
      id: 11,
      title: "Tropical Leaves",
      image: "/art/tropical-leaves-botanical.jpg",
      medium: "Watercolor",
      size: "medium",
    },
    {
      id: 12,
      title: "Still Life Study",
      image: "/art/still-life-objects.jpg",
      medium: "Oil",
      size: "small",
    },
    {
      id: 13,
      title: "Portrait Study",
      image: "/art/portrait-figure-drawing.jpg",
      medium: "Graphite",
      size: "medium",
    },
    {
      id: 14,
      title: "Landscape Vista",
      image: "/art/landscape-vista-painting.jpg",
      medium: "Acrylic",
      size: "large",
    },
    {
      id: 15,
      title: "Floral Arrangement",
      image: "/art/floral-arrangement-watercolor.jpg",
      medium: "Watercolor",
      size: "medium",
    },
    {
      id: 16,
      title: "Abstract Forms",
      image: "/art/abstract-forms-study.jpg",
      medium: "Pastel",
      size: "small",
    },
    {
      id: 17,
      title: "Citrus Study",
      image: "/art/citrus-fruit-study.jpg",
      medium: "Watercolor",
      size: "small",
    },
    {
      id: 18,
      title: "Architectural Detail",
      image: "/art/architectural-detail-drawing.jpg",
      medium: "Ink",
      size: "medium",
    },
  ]

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2"
      case "medium":
        return "col-span-1 row-span-1"
      case "small":
        return "col-span-1 row-span-1"
      default:
        return "col-span-1 row-span-1"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Quote Section */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-light italic max-w-4xl mx-auto leading-relaxed">
            "You have to systematically create confusion, it sets creativity free. Everything that is contradictory
            creates life."
          </blockquote>
          <cite className="block mt-6 md:mt-8 text-base md:text-lg opacity-90 font-medium">— Salvador Dalí</cite>
        </div>
      </section>

      {/* Art Gallery Grid */}
      <main className="container mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 auto-rows-fr">
            {artworks.map((artwork) => (
              <div key={artwork.id} className={`group cursor-pointer ${getSizeClasses(artwork.size)}`}>
                <div className="relative overflow-hidden rounded-lg bg-gray-100 h-full min-h-[120px] md:min-h-[160px]">
                  <Image
                    src={artwork.image || "/placeholder.svg"}
                    alt={artwork.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-3 md:p-4 text-white">
                      <h3 className="font-medium text-xs md:text-sm mb-1">{artwork.title}</h3>
                      <p className="text-xs opacity-90">{artwork.medium}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Artist Statement */}
          <div className="mt-16 md:mt-20 max-w-3xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-serif mb-4 md:mb-6 text-gray-800">Artist Statement</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
              <p>
                My artistic practice explores the intersection of technical precision and creative expression. Drawing
                from my background in systems engineering, I approach each piece with both analytical thinking and
                intuitive creativity.
              </p>
              <p>
                Working primarily in watercolor, graphite, and mixed media, I find inspiration in natural forms,
                architectural details, and the human figure. Each piece represents a dialogue between structure and
                spontaneity, reflecting my belief that the most compelling art emerges from controlled chaos.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
