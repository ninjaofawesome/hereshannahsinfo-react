export const totalTime = (dateString) => {
  const startDate = new Date(dateString).getTime();
  const today = new Date().getTime();
  const numberOfDays = (today - startDate) / (1000 * 3600 * 24);
  const totalTime1 = (numberOfDays / 365).toFixed(1);
  const totalTime2 = (numberOfDays / 365).toFixed(2);
  const prettyTime = totalTime2 < 1.00 ? (totalTime1 * 10) : totalTime2;
  const length = totalTime2 < 1 ? 'months' : 'years';
  return `${prettyTime} ${length}`;
};


export const techInfoData = [
  {
    id: 'techInfo0',
    copy: () => `I've been a front end engineer at Vimeo for ${totalTime('07/10/2017')}.  I've been on the Growth Team for ${totalTime('01/07/2019')}.  Before that, I was on the OTT team, where I made tools that help creators to launch their own subscription based channels.`,
  },
  {
    id: 'techInfo1',
    copy: () => `I've been using React and Redux for over ${totalTime('2/1/2017')} years on a daily basis, and I'm gaining more proficiency with TypeScript since switching teams.`,
  },
  {
    id: 'techInfo2',
    copy: () => "In addition to my technical work, I've also had the opportunity to be on hiring panels in my current position, work with mentees, and leading hack week projects.  I enjoy being well rounded and find different (and enjoyable) ways to challenge myself.",
  },
];



