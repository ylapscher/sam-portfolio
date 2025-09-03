import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Download, Eye, FileText } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="container mx-auto px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-serif text-center mb-8 text-gray-800">Resume</h1>

          <div className="text-center mb-12">
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Download my resume to learn more about my experience in UX design, research, and cross-functional team
              leadership.
            </p>

            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
              </div>

              <h2 className="text-xl font-medium text-gray-800 mb-2">Sara Streitman - UX Designer</h2>
              <p className="text-gray-600 mb-6">Professional Resume & Portfolio Summary</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/sara-streitman-resume.pdf"
                  download="Sara_Streitman_Resume.pdf"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </a>

                <a
                  href="/sara-streitman-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-primary hover:text-primary transition-colors bg-white"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Online
                </a>
              </div>
            </div>
          </div>

          {/* Resume Highlights */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-serif mb-4 text-gray-800">Experience</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium">7+ years in UX Design</div>
                    <div className="text-sm text-gray-600">User-centered design and research</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium">Cross-functional Leadership</div>
                    <div className="text-sm text-gray-600">Leading design teams and initiatives</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium">Systems Engineering Background</div>
                    <div className="text-sm text-gray-600">Process optimization and analysis</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-serif mb-4 text-gray-800">Expertise</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium">User Research & Testing</div>
                    <div className="text-sm text-gray-600">Usability studies and data analysis</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium">Prototyping & Wireframing</div>
                    <div className="text-sm text-gray-600">Design systems and interaction design</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium">Digital Transformation</div>
                    <div className="text-sm text-gray-600">Business process improvement</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-serif mb-4 text-gray-800">Let's Connect</h3>
            <p className="text-gray-600 mb-6">Interested in discussing opportunities or learning more about my work?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:sastreitman@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-400 text-white rounded-full font-medium hover:bg-orange-500 transition-colors"
              >
                Send Email
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-colors bg-white"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
