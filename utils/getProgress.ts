export const getProgress = () => {
  return [
    `BILLING`,
    `CARD`,
    `EMAIL`,
    ...(process.env.NEXT_PUBLIC_QUEST_PAGE === `ON` ? [`QUESTIONS`] : []),
    ...(process.env.NEXT_PUBLIC_DOCS_PAGE === `ON` ? [`DOCUMENT`] : []),
    `CONFIRMATION`, // don't move this, Confirmation needs to come last
  ];
};
