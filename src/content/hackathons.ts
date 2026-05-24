export const HACKATHONS = [
  {
    slug: 'first',
    title: 'First Hackathon',
    date: 'Fill this in',
    summary:
      'A placeholder for the first hackathon: what the team tried, what shipped, and what I would do differently next time.',
    fields: [
      ['Event', 'Fill this in.'],
      ['Date', 'Fill this in.'],
      ['Team', 'Fill this in.'],
      ['Problem', 'Fill this in.'],
      ['What we built', 'Fill this in.'],
      ['Stack', 'Fill this in.'],
      ['What I learned', 'Fill this in.'],
    ],
  },
] as const;

export function getHackathon(slug: string) {
  return HACKATHONS.find((hackathon) => hackathon.slug === slug);
}
