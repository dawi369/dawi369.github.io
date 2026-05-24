export const HACKATHONS = [
  {
    slug: 'first',
    title: 'European Defence Tech Hub Hackathon',
    date: '2026-05-15',
    summary:
      'A placeholder for the first hackathon: what the team tried, what shipped, and what I would do differently next time.',
    fields: [
      ['Event', 'European Defence Tech Hub Hackathon'],
      ['Date', '2026-05-15'],
      ['Team', 'The team we worked with'],
      ['Problem', 'The problem we were trying to solve'],
      ['What we built', 'What we built'],
      ['Stack', 'The stack we used'],
      ['What I learned', 'What I learned from the experience'],
    ],
  },
] as const;

export function getHackathon(slug: string) {
  return HACKATHONS.find((hackathon) => hackathon.slug === slug);
}
