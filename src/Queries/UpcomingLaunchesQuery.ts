const UpcomingLaunchesQuery = {
  query: {
    upcoming: true,
  },
  options: {
    select: {
      name: 1,
      date_local: 1,
      date_utc: 1,
      flight_number: 1,
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
      {
        path: "payloads",
        select: {
          customers: 1,
          nationalities: 1,
        },
      },
    ],
  },
};

export default UpcomingLaunchesQuery;
