import i18n from "../i18n";

export const launchesFilterUpcoming = [
  {
    id: 0,
    title: i18n.t("upcomingLaunchesBtn"),
    selected: true,
    key: "launchesType",
  },
  {
    id: 1,
    title: i18n.t("pastLaunchesBtn"),
    selected: false,
    key: "launchesType",
  },
  {
    id: 2,
    title: i18n.t("boostersBtn"),
    selected: false,
    key: "launchesType",
  },
];

export const launchesFilterPast = [
  {
    id: 0,
    title: i18n.t("upcomingLaunchesBtn"),
    selected: false,
    key: "launchesType",
  },
  {
    id: 1,
    title: i18n.t("pastLaunchesBtn"),
    selected: true,
    key: "launchesType",
  },
  {
    id: 2,
    title: i18n.t("boostersBtn"),
    selected: false,
    key: "launchesType",
  },
];

export const filterRockets = [
  {
    id: 0,
    title: i18n.t("all"),
    selected: true,
    key: "rockets",
  },
  {
    id: 1,
    title: "Falcon 1",
    selected: false,
    key: "rockets",
  },
  {
    id: 2,
    title: "Falcon 9",
    selected: false,
    key: "rockets",
  },
  {
    id: 3,
    title: "Falcon Heavy",
    selected: false,
    key: "rockets",
  },
  {
    id: 4,
    title: "Starship",
    selected: false,
    key: "rockets",
  },
];

export const filterLaunchSite = [
  {
    id: 0,
    title: i18n.t("all"),
    selected: true,
    key: "launchSite",
  },
  {
    id: 1,
    title: "VAFB SLC 3W",
    selected: false,
    key: "5e9e4501f5090910d4566f83",
  },
  {
    id: 2,
    title: "CCSFS SLC 40",
    selected: false,
    key: "5e9e4501f509094ba4566f84",
  },
  {
    id: 3,
    title: "STLS",
    selected: false,
    key: "5e9e4502f5090927f8566f85",
  },
  {
    id: 4,
    title: "Kwajalein Atoll",
    selected: false,
    key: "5e9e4502f5090995de566f86",
  },
  {
    id: 5,
    title: "VAFB SLC 4E",
    selected: false,
    key: "5e9e4502f509092b78566f87",
  },
  {
    id: 6,
    title: "KSC LC 39A",
    selected: false,
    key: "5e9e4502f509094188566f88",
  },
];

export const filterStatus = [
  {
    id: 0,
    title: i18n.t("all"),
    selected: true,
    key: "status",
  },
  {
    id: 1,
    title: i18n.t("success"),
    selected: false,
    key: "true",
  },
  {
    id: 2,
    title: i18n.t("failure"),
    selected: false,
    key: "false",
  },
];
