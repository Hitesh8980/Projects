export const searchDeals = (deals, query) => {
    const filteredDeals = deals.filter((deal) => {
      const title = deal.title.toLowerCase();
      const description = deal.description.toLowerCase();
      return title.includes(query.toLowerCase()) || description.includes(query.toLowerCase());
    });
    return filteredDeals;
  };