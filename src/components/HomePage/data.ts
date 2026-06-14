import type { StaticImageData } from "next/image";

import { AdminIcon, ParentIcon, StudentIcon, TeacherIcon } from "./assets";

type Role = {
  label: string;
  image: StaticImageData;
};

type CompanyHighlight = {
  title: string;
  copy: string;
};

type RoleGuide = {
  title: string;
  copy: string;
};

const roles: Role[] = [
  { label: "For administrator", image: AdminIcon },
  { label: "For teacher", image: TeacherIcon },
  { label: "For student", image: StudentIcon },
  { label: "For parent", image: ParentIcon },
];

const companyHighlights: CompanyHighlight[] = [
  {
    title: "About us",
    copy: "EDUO learning builds practical education infrastructure for schools that need administration, learning, and family communication to work as one connected system.",
  },
  {
    title: "Our mission",
    copy: "We help educators spend less time managing fragmented workflows and more time supporting students, families, and school communities.",
  },
  {
    title: "Contact",
    copy: "Schedule a quick conversation with EDUO to explore how the platform can support your school operation and learning environment.",
  },
];

const roleGuides: RoleGuide[] = [
  {
    title: "For administrator",
    copy: "Manage communication, academics, reporting, permissions, scheduling, and operational workflows from one centralized platform.",
  },
  {
    title: "For teacher",
    copy: "Simplify grading, attendance, assignments, announcements, and family communication through connected classroom workflows.",
  },
  {
    title: "For student",
    copy: "Access schedules, assignments, grades, announcements, and learning resources anytime across desktop and mobile.",
  },
  {
    title: "For parents",
    copy: "Stay informed with real-time updates, attendance notifications, appointments, reports, and direct communication tools.",
  },
];

export { companyHighlights, roleGuides, roles };
