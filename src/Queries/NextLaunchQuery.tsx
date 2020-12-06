const NextLaunchQuery = {
  query: {
    upcoming: true,
  },
  options: {
    limit: 5,
    select: {
      name: 1,
      date_local: 1,
      flight_number: 1,
      details: 1,
    },
    sort: {
      flight_number: "asc",
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

export default NextLaunchQuery;
