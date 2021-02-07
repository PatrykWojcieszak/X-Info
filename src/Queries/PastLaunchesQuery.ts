export const PastLaunchesQuery = {
  query: {
    upcoming: false,
  },
  options: {
    // page: 1,
    // limit: 10,
    pagination: false,
    select: {
      name: 1,
      date_local: 1,
      date_utc: 1,
      success: 1,
      links: 1,
      flight_number: 1,
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
      {
        path: "payloads",
        select: {
          customers: 1,
          nationalities: 1,
        },
      },
      {
        path: "cores",
        select: {
          reused: 1,
        },
      },
    ],
  },
};
