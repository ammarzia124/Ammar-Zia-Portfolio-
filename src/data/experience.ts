export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: "General Secretary",
    organization: "Farabi Science Society",
    period: "[START DATE] — Present",
    description:
      "[PLACEHOLDER] Led administrative operations and coordinated events for the university's premier science society.",
    highlights: [
      "[PLACEHOLDER] Managed a team of [X] volunteers across [X] events",
      "[PLACEHOLDER] Organized [X] technical workshops and seminars",
      "[PLACEHOLDER] Streamlined internal communication and event planning processes",
    ],
  },
  {
    role: "Co-Lead Security",
    organization: "TEDx [University Name]",
    period: "[START DATE] — [END DATE]",
    description:
      "[PLACEHOLDER] Led the security planning and execution for a TEDx event, ensuring safety protocols and technical infrastructure.",
    highlights: [
      "[PLACEHOLDER] Designed and implemented security protocols for [X]+ attendees",
      "[PLACEHOLDER] Coordinated with venue staff and technical teams for seamless event execution",
      "[PLACEHOLDER] Managed network security for live-streaming infrastructure",
    ],
  },
  {
    role: "Community Lead",
    organization: "Code Voyager",
    period: "[START DATE] — Present",
    description:
      "[PLACEHOLDER] Leading a developer community focused on mentoring and technical skill development.",
    highlights: [
      "[PLACEHOLDER] Grew community membership to [X]+ active members",
      "[PLACEHOLDER] Organized weekly coding sessions and hackathons",
      "[PLACEHOLDER] Mentored junior developers in web development and cybersecurity basics",
    ],
  },
];
