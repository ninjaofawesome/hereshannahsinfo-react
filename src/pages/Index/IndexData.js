const totalTime = (dateString) => {
  const startDate = new Date(dateString).getTime();
  const today = new Date().getTime();
  const numberOfDays = (today - startDate) / (1000 * 3600 * 24);
  const totalTime1 = (numberOfDays / 365).toFixed(1);
  const totalTime2 = (numberOfDays / 365).toFixed(2);
  const prettyTime = totalTime2 < 1.00 ? (totalTime1 * 10) : totalTime2;
  const length = totalTime2 < 1 ? 'months' : 'years';
  return `${prettyTime} ${length}`;
};


export const genInfoData = [
  {
    id: 'genInfo0',
    copy: () => `As of today, I have been a developer for ${totalTime('03/14/2015')}.`,
  },
  {
    id: 'genInfo1',
    copy: () => 'JavaScript is my primary language.',
  },
  {
    id: 'genInfo2',
    copy: () => 'I love being a Front End Engineer.',
  },
  {
    id: 'genInfo3',
    copy: () => 'I have a BFA in Fashion Design and (lapsed) hairdressing licences in 2 states.',
  },
  {
    id: 'genInfo4',
    copy: () => 'I knit voraciously.',
  },
];

export const techInfoData = [
  {
    id: 'techInfo0',
    copy: () => `I've been a front end engineer at Vimeo for ${totalTime('07/10/2017')}.  I've been on the Growth Team for ${totalTime('01/07/2019')}.  Before that, I was on the OTT team.`,
  },
  {
    id: 'techInfo1',
    copy: () => `I've been on the Growth Team for ${totalTime('01/07/2019')}.  Before that, I was on the OTT (Over The Top) team.`,
  },
  {
    id: 'techInfo2',
    copy: () => "I've also been lucky enough to be a front end engineer at Fast Company, ESPN, and a couple of dev shops.",
  },
];



