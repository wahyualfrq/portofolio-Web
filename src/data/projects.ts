export interface Project {
  id: string;
  title: string;
  tags: string[];
  category: 'web' | 'mobile' | 'ai';
  badge: string;
  badgeColor: string; // e.g. bg-brandAccentBlue, bg-emerald-600, bg-indigo-600
  mockType: 'kawan-kampus' | 'thrift-cycle' | 'pasti';
  mockUrl?: string;
  date: string;
  descriptionKey: string;
  techStack: string[];
}

export const projectsData: Project[] = [
  {
    id: 'kawan-kampus',
    title: 'Kawan Kampus',
    tags: ['web', 'ai'],
    category: 'web',
    badge: 'AI Platform',
    badgeColor: 'bg-brandAccentBlue',
    mockType: 'kawan-kampus',
    mockUrl: 'kawan-kampus.vercel.app',
    date: 'Feb 2026 - Jul 2026',
    descriptionKey: 'p1Desc',
    techStack: ['Next.js', 'Laravel', 'Gemini AI', 'PostgreSQL']
  },
  {
    id: 'thrift-cycle',
    title: 'ThriftCycle',
    tags: ['mobile'],
    category: 'mobile',
    badge: 'Mobile Dev',
    badgeColor: 'bg-emerald-600',
    mockType: 'thrift-cycle',
    date: 'Jun 2025',
    descriptionKey: 'p2Desc',
    techStack: ['Flutter', 'Laravel', 'MySQL', 'REST API']
  },
  {
    id: 'pasti',
    title: 'PASTI',
    tags: ['web'],
    category: 'web',
    badge: 'Web Dev',
    badgeColor: 'bg-indigo-600',
    mockType: 'pasti',
    date: 'Nov 2025',
    descriptionKey: 'p3Desc',
    techStack: ['React.js', 'Tailwind CSS', 'Laravel API']
  }
];
