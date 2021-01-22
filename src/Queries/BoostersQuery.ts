export const BoostersQuery = {
  query: {},
  options: {
    limit: 10,
    page: 1,
    select: {
      block: 1,
      status: 1,
      launches: 1,
      serial: 1,
      reuse_count: 1,
    },
    sort: {
      block: "desc",
    },
    populate: [
      {
        path: "launches",
        select: {
          name: 1,
          flight_number: 1,
          date_utc: 1,
        },
      },
    ],
  },
};
