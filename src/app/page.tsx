import { Pills } from '@/components/Pills';

export default function Home() {
  return (
    <>
      <Pills />

      <div className="max-w-3xl mx-auto space-y-32 pb-[100vh] md:pb-0">
        {/* Me Section */}
        <section id="me" className="md:min-h-screen flex flex-col md:justify-center pt-4 md:pt-0">
          <h1 className="text-4xl mb-4 font-semibold">Dawi</h1>
          <p className="text-lg text-gray-600 mb-2">David William Erwin</p>
          <p className="text-sm text-gray-500 mb-6">Founder & Software Engineer</p>

          {/* Bio */}
          <div className="max-w-2xl">
            <p className="text-base text-gray-700 leading-relaxed">
              I push buttons, better then most. 
              <br />
              <br />
              I like to bounce around from subject to subject, but once in a while I am 
              interested enough to dig deep into something. My current project is Swordfish,
              a futures analytics platform designed for active traders seeing digestable,
              real-time insights into the futures market. I have been working on Swordfish in
              my spare time for a couple of months now, and the target launch date is Q3 2026,
              assuming my data provider pushed their futures data product out of beta in that 
              time.
              <br />
              <br />
              I always have a few projects in the works, they usually start out as a way to
              learn things I&apos;ve been nerd-sniped by, and sometimes they are good enough to stick.
            </p>
          </div>
        </section>

        {/* Tech Section */}
        <section id="tech" className="space-y-6">
          <h2 className="text-2xl font-semibold">Tech</h2>
          
          {/* Interactive content placeholder */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 min-h-[300px] flex items-center justify-center">
            <p className="text-gray-400 text-sm">Interactive playground coming soon...</p>
          </div>
        </section>

        {/* Work Section */}
        <section
          id="work"
          className="md:min-h-screen flex flex-col md:justify-center"
        >
          <h2 className="text-2xl mb-6 font-semibold">Work</h2>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
              <div className="flex-1">
                <p className="text-lg">Software Engineer - Data Pipeline</p>
                <p className="text-sm text-gray-500">Mastercard</p>
              </div>
              <p className="text-xs text-gray-400 sm:text-right whitespace-nowrap">
                Sep 2025 - Present
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
              <div className="flex-1">
                <p className="text-lg">Software Engineer Trainee</p>
                <p className="text-sm text-gray-500">Valeo</p>
              </div>
              <p className="text-xs text-gray-400 sm:text-right whitespace-nowrap">
                Dec 2024 - Apr 2025
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section
          id="education"
          className="md:min-h-screen flex flex-col md:justify-center"
        >
          <h2 className="text-2xl mb-6 font-semibold">Education</h2>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
              <div className="flex-1">
                <p className="text-lg">Master of Science</p>
                <p className="text-sm text-gray-600">Computer Science</p>
                <p className="text-sm text-gray-500">
                  Georgia Institute of Technology
                </p>
              </div>
              <p className="text-xs text-gray-400 sm:text-right whitespace-nowrap">
                Jan 2026 - Present
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
              <div className="flex-1">
                <p className="text-lg">Bachelor of Science</p>
                <p className="text-sm text-gray-600">
                  Computer Science & Electrical Engineering
                </p>
                <p className="text-sm text-gray-500">
                  Czech Technical University
                </p>
                {/* Thesis */}
                <div className="mt-3">
                  <p className="text-sm text-gray-600 mb-1">Thesis:</p>
                  <a
                    href="https://repository.cern/records/1r0yx-syh45"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-700 hover:text-gray-900 underline underline-offset-2 decoration-gray-400 hover:decoration-gray-600 transition-colors"
                  >
                    Analysis of the ttH Process in Same-Sign Dilepton Events
                    with Hadronic Tau Decay Using Self-Attention Architectures →
                  </a>
                  <p className="text-xs text-gray-500 mt-1">
                    Published on CERN
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-400 sm:text-right whitespace-nowrap">
                Aug 2022 - Jun 2025
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
