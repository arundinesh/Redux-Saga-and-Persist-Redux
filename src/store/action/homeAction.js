export const fetchData = (page) => {
  return {
    type: "FetchData",
    page: page,
  };
};
