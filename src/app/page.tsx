import BottomMarquee from '@/components/BottomMarquee';
import HomeControls from '@/components/HomeControls';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <article className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-6 pb-32 pt-24 sm:px-8 lg:px-0">
        <h1 className="max-w-3xl font-serif text-5xl leading-[1.02] font-normal text-foreground sm:text-6xl md:text-7xl">
          Work in <em className="font-normal">Progress</em>
        </h1>
        <div className="mt-12 max-w-2xl space-y-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          <p>
            I am a software engineer in Prague, interested in serious products
            at the edge of finance, data, machine learning, and markets. I like
            work where good taste matters: clear systems, fast feedback, and
            engineering that turns messy real-world problems into something
            useful.
          </p>
          <p>
            At Mastercard, I work on financial data pipelines, Databricks
            migrations, and large-scale data products. I studied electrical
            engineering and computer science at Czech Technical University,
            where my thesis used transformer models to classify rare Higgs boson
            signals in CERN ATLAS data. Outside work, I build side projects
            around markets, analytics, and applied AI, including trading agents,
            futures tooling, and AI-assisted learning products.
          </p>
          <p>
            I am looking for teams with high standards, real urgency, and enough
            ambition to build things that matter. I want to work around people
            who care about quality, move quickly, and make each other sharper.
          </p>
          <p>
            Outside work, my hobbies are mostly about athetism, tech, and skills
            that will last me a lifetime. I am a lifelong ice hockey player, I 
            build and fly drones, and I am learning guitar on the side.
          </p>
        </div>
      </article>

      <BottomMarquee />
      <HomeControls />
    </main>
  );
}
