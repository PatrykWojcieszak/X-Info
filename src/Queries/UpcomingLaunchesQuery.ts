export const UpcomingLaunchesQuery = {
  query: {
    upcoming: true,
  },
  options: {
    select: {
      name: 1,
      id: 1,
      date_local: 1,
      date_utc: 1,
      flight_number: 1,
      date_precision: 1,
      upcoming: 1,
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
          id: 1,
        },
      },
      {
        path: "fairings",
        select: {
          recovered: 1,
        },
      },
      {
        path: "cores",
        select: {
          landing_success: 1,
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
