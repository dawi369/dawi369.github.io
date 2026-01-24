import { Pills } from '@/components/Pills';

export default function Home() {
  return (
    <>
      <Pills />

      <div className="max-w-3xl mx-auto py-20 space-y-32">
        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex flex-col justify-center"
        >
          <h1 className="text-4xl mb-4 font-semibold">Dawi</h1>
          <p className="text-lg text-gray-600 mb-2">David William Erwin</p>
          <p className="text-sm text-gray-500">Software Engineer</p>
        </section>

        {/* Work Section */}
        <section
          id="work"
          className="min-h-screen flex flex-col justify-center"
        >
          <h2 className="text-2xl mb-6 font-semibold">Work</h2>
          <div className="space-y-4">
            <div>
              <p className="text-lg">Data Pipeline Engineer</p>
              <p className="text-sm text-gray-500">Mastercard</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section
          id="education"
          className="min-h-screen flex flex-col justify-center"
        >
          <h2 className="text-2xl mb-6 font-semibold">Education</h2>
          <div className="space-y-4">
            <div>
              <p className="text-lg">Bachelor of Science</p>
              <p className="text-sm text-gray-600">
                Computer Science & Electrical Engineering
              </p>
              <p className="text-sm text-gray-500">
                Czech Technical University
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
