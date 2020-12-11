export const pageVariantsAnim = {
  initial: {
    opacity: 0,
  },
  in: {
    transition: { duration: 1, ease: "easeOut" },
    opacity: 1,
    when: "beforeChildren",
    staggerChildren: 0.2,
  },
  out: {
    opacity: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

export const bottomToTopAnim = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.25 },
  },
};

export const rightToLeftAnim = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, type: "tween" },
  },
  exit: {
    opacity: 0,
    x: -100,
  },
};

export const showLaunchesList = {
  initial: {
    opacity: 0,
    y: 100,
  },
  in: {
    transition: { duration: 1, ease: "easeOut" },
    opacity: 1,
    y: 0,
    when: "beforeChildren",
    staggerChildren: 0.2,
  },
  out: {
    y: 100,
    opacity: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};
