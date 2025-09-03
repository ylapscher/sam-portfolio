import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="container mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-serif text-center mb-12 md:mb-16 text-gray-800">About</h1>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Portrait Image */}
            <div>
              <Image
                src="/professional-portrait-of-woman-in-forest-setting.jpg"
                alt="Sam Streitman professional portrait in forest setting"
                width={500}
                height={600}
                className="rounded-2xl w-full h-auto shadow-lg"
              />
            </div>

            {/* About Content */}
            <div className="space-y-8 md:space-y-10">
              <div>
                <h2 className="text-xl md:text-2xl font-serif mb-4 md:mb-6 text-gray-800 leading-tight">
                  Combining design, process optimization, and technology.
                </h2>

                <div className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
                  <p>
                    I started as an Industrial and Systems Engineer focusing on solving business problems through
                    process optimization. Consulting in the IT industry provided a unique opportunity to understand how
                    technology solves challenges across multiple business verticals, ultimately leading me to User
                    Experience Design.
                  </p>

                  <p>
                    While consulting, I realized that intersection of process optimization and design. My work ranges
                    from digital transformations and user onboarding to simplifying processes for internal efficiency.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-serif mb-3 md:mb-4 text-gray-800">Why design?</h3>

                <div className="space-y-3 md:space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
                  <p>
                    Throughout my career in tech consulting, I've discovered a love for helping others. My drive comes
                    from understanding the why behind a difficult problem and determining how I can use my design and
                    analytical skillset to find solutions to help technology.
                  </p>

                  <p>
                    As technology continues to become more complex, calculations, and intertwined in our lives, creating
                    seamless interactions through design becomes essential.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-serif mb-3 md:mb-4 text-gray-800">Following my passion!</h3>

                <div className="space-y-3 md:space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
                  <p>
                    Although I initially focused on a technical career path, I always stayed connected to my creative
                    side. User Experience Design and Research is at the intersection of problem solving, optimization,
                    technology and design. I have learned to apply my technical background and professional experience
                    to create solutions to better understanding business goals, user needs, and technical requirements.
                  </p>

                  <p>
                    Outside of my full time commitments, I love creating art. My hobbies range from fine arts
                    watercolors, graphite, pastels to traditional and combining.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8">
                  <Link href="/portfolio">
                    <Button
                      variant="outline"
                      className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-4 md:px-6 py-2 rounded-full font-medium bg-transparent transition-all duration-200 w-full sm:w-auto"
                    >
                      View My Work
                    </Button>
                  </Link>

                  <Link href="/art">
                    <Button
                      variant="outline"
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-4 md:px-6 py-2 rounded-full font-medium bg-transparent transition-all duration-200 w-full sm:w-auto"
                    >
                      View Artwork
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Skills/Experience Section */}
          <div className="mt-16 md:mt-20 pt-12 md:pt-16 border-t border-gray-200">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-lg md:text-xl font-serif mb-4 md:mb-6 text-gray-800">Experience & Skills</h3>
                <div className="space-y-3 md:space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1 md:mb-2 text-sm md:text-base">
                      UX Design & Research
                    </h4>
                    <p className="text-xs md:text-sm">
                      User interviews, usability testing, wireframing, prototyping, design systems
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1 md:mb-2 text-sm md:text-base">
                      Process Optimization
                    </h4>
                    <p className="text-xs md:text-sm">Systems engineering, workflow analysis, digital transformation</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1 md:mb-2 text-sm md:text-base">
                      Cross-functional Leadership
                    </h4>
                    <p className="text-xs md:text-sm">
                      Team collaboration, stakeholder management, agile methodologies
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-serif mb-4 md:mb-6 text-gray-800">Creative Pursuits</h3>
                <div className="space-y-3 md:space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Fine Arts</h4>
                    <p className="text-xs md:text-sm">Watercolor painting, graphite drawing, pastel artwork</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Mixed Media</h4>
                    <p className="text-xs md:text-sm">
                      Traditional and digital art combination, experimental techniques
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Design Philosophy</h4>
                    <p className="text-xs md:text-sm">Bridging analytical thinking with creative expression</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
