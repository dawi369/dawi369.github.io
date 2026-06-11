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
            at the edge of llm automation, finance, and ml. I like
            work where the details matter and the product has to hold up in the
            real world.
          </p>
          <p>
            At Mastercard, I worked on financial data pipelines, Databricks
            migrations, and large-scale data products. I now work on the team
            that build the apps and serivces using that data. I studied electrical
            engineering and computer science at Czech Technical University,
            where my thesis used a transformer model, designed and trained by me, 
            to classify rare Higgs boson signals in CERN ATLAS data. 
          </p> 
          <p>
            Outside work, I run a small software studio called{' '}
            <a
              href="https://t23.dev"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              T23
            </a>
            , 
            where we build actually useful and scalable software products around llm 
            automation, market analytics, interview prep, and applied AI in several 
            sectors includion financial.
          </p>
          <p>
            I am looking for teams with high standards, real urgency, and enough
            ambition to build things that matter. I want to work around people
            who care about quality, move quickly, and make each other sharper.
          </p>
          <p>
            Outside work, my hobbies are mostly about athletics, tech, and skills
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
