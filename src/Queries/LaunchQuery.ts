export const LaunchQuery = {
  query: {
    _id: "",
  },
  options: {
    limit: 1,
    select: {
      name: 1,
      id: 1,
      date_local: 1,
      date_utc: 1,
      flight_number: 1,
      details: 1,
      links: 1,
      success: 1,
      failures: 1,
      date_precision: 1,
      upcoming: 1,
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
        path: "crew.crew",
        select: {
          name: 1,
          agency: 1,
          image: 1,
        },
      },
      {
        path: "ships",
        select: {
          name: 1,
          image: 1,
        },
      },
      {
        path: "fairings",
        select: {
          recovered: 1,
        },
      },
      "payloads",
      {
        path: "cores",
        populate: [
          {
            path: "landpad",
            select: {
              name: 1,
              full_name: 1,
              landing_success: 1,
            },
          },
        ],
      },
    ],
  },
};
