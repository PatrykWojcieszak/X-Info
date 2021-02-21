export const RecentLaunchesQuery = {
  query: {
    date_utc: {
      $lte: new Date(),
    },
    success: 1,
  },
  options: {
    limit: 5,
    select: {
      name: 1,
      id: 1,
      date_local: 1,
      date_utc: 1,
      success: 1,
      links: 1,
      flight_number: 1,
    },
    sort: {
      flight_number: "desc",
    },
  },
};
