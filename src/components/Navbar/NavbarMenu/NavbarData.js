// this is sample data for now, would like to explore using firebase for this as V2
import React from 'react';

const GitLink = () => (
  <a
    href='https://github.com/ninjaofawesome'
    target='_blank'
    rel='noopener noreferrer'
  >
    Github
  </a>
);

const LinkedInLink = () => (
  <a
    href='https://www.linkedin.com/in/hannahnordgren/'
    target='_blank'
    rel='noopener noreferrer'
  >
    LinkedIn
  </a>
);

const BlogLink = () => (
  <a
    href='http://anunorderedlistapart.tumblr.com/'
    target='_blank'
    rel='noopener noreferrer'
  >
    Blog
  </a>
);

const EmailLink = () => (
  <a
    href='mailto:hey@hereshannahs.info?subject=All%20Good%20Things%20Start%20With%20Coffee.'
    target='_blank'
    rel='noopener noreferrer'
  >
    Email
  </a>
);

const navLinks = [
  {
    id: 1,
    copy: GitLink,
  },
  {
    id: 2,
    copy: LinkedInLink,
  },
  {
    id: 3,
    copy: BlogLink,
  },
  {
    id: 4,
    copy: EmailLink,
  },
];

export default navLinks;
