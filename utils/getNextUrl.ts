export const getNextUrl = (index: string) => {
  const url = {
    CARD: `/secure-flows/card`,
    BILLING: `/secure-flows/billing`,
    QUESTIONS: `/secure-flows/questions`,
    EMAIL: `/secure-flows/email`,
    DOCUMENT: `/secure-flows/document`,
    CONFIRMATION: `/secure-flows/confirmation`,
  }[index];

  return url || `/`;
};
