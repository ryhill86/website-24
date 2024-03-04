/*---------  Tech Constants  --------- */

import { Projects } from './ProjectsTypes';
import {
  ORDER_SUMMARY,
  STARTER,
  STARTER_TEAM,
  TEAM_MANAGEMENT_IMAGE,
  TRIAL,
} from './projectImageConstants';

const REACT = 'React';
const PHP = 'PHP';
const API_DEVELOPMENT = 'API Development';
const SQL = 'SQL';

export const projects: Projects = {
  '2024': [
    {
      title: 'New App Subscription Page',
      description:
        "With a new lineup of packaging offerings, this project's purpose was to create a new, robust subscription page, allowing users to purchase, upgrade, and manage their subscriptions.",
      highlights: [
        'Implemented a new subscription page',
        'Created a new API endpoint for subscription management',
        'Integrated with a new payment gateway',
      ],
      tech: [REACT, PHP, API_DEVELOPMENT],
      github: '',
      images: [ORDER_SUMMARY, STARTER, STARTER_TEAM, TRIAL],
    },
  ],
  '2023': [
    {
      title: 'Billing System Rebuild',
      description:
        "With a new lineup of packaging offerings, this project's purpose was to create a new, robust subscription page, allowing users to purchase, upgrade, and manage their subscriptions.",
      tech: [REACT, PHP, API_DEVELOPMENT],
      github: '',
      images: [],
    },
    {
      title: 'Refactoring legacy code',
      description:
        'Having learned refactoring techniques, I helped facilitate regular refactoring sessions, which helped us to improve the quality of our codebase and reduce technical debt.',
      tech: [PHP, SQL],
      github: '',
      images: [],
    },
  ],
  '2020': [
    {
      title: 'Aggregate Team Date-Based Stats',
      description:
        'This feature provided teams with a way to view their aggregate stats, including the aggregation of videos recorded, emails sent, video views, and more. Complete with CSV export.',
      tech: [REACT, PHP, API_DEVELOPMENT],
      github: '',
      images: [],
    },
    {
      title: 'React Rebuild - Teams Page',
      description:
        'The Teams page was rebuilt in React, which improved the performance and maintainability of the page. It also allowed us to add new features, such as the ability to filter and search teams.',
      tech: [REACT, PHP, API_DEVELOPMENT],
      github: '',
      images: [TEAM_MANAGEMENT_IMAGE],
    },
  ],
};
