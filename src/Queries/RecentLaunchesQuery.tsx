const RecentLaunchesQuery = {
  query: {
    date_utc: {
      $gte: "2020-06-06T00:00:00.000Z",
      $lte: "2020-12-06T00:00:00.000Z",
    },
  },
  options: {
    limit: 5,
    select: {
      name: 1,
      date_local: 1,
      date_utc: 1,
      success: 1,
      links: 1,
    },
    sort: {
      flight_number: "desc",
    },
  },
};

export default RecentLaunchesQuery;
