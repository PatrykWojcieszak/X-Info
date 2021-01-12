const LatestLaunchQuery = {
  query: {
    upcoming: false,
  },
  options: {
    limit: 1,
    select: {
      name: 1,
      date_local: 1,
      date_utc: 1,
      flight_number: 1,
      details: 1,
      links: 1,
      success: 1,
      failures: 1,
      date_precision: 1,
    },
    sort: {
      flight_number: "desc",
    },
    populate: [
      {
        path: "launchpad",
        select: {
          name: 1,
          full_name: 1,
        },
      },
      {
        path: "rocket",
        select: {
          name: 1,
        },
      },
    ],
  },
};

export default LatestLaunchQuery;
