export const defaultProps = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "30px",
  duration: 650,
  desktop: true,
  mobile: true,
};

const FAST_DELAY = 140;
const MEDIUM_DELAY = 220;
const HERO_DELAY = 280;

export const targetElements = [
  {
    element: ".section-title",
    animation: {
      delay: FAST_DELAY,
      distance: "0px",
      origin: "bottom",
    },
  },
  {
    element: ".hero-title",
    animation: {
      delay: MEDIUM_DELAY,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".hero-cta",
    animation: {
      delay: HERO_DELAY,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".about-wrapper__image",
    animation: {
      delay: MEDIUM_DELAY,
      origin: "bottom",
    },
  },
  {
    element: ".about-wrapper__info",
    animation: {
      delay: HERO_DELAY,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".project-wrapper__text",
    animation: {
      delay: MEDIUM_DELAY,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".project-wrapper__image",
    animation: {
      delay: HERO_DELAY,
      origin: window.innerWidth > 768 ? "right" : "bottom",
    },
  },
  {
    element: ".contact-wrapper",
    animation: {
      delay: MEDIUM_DELAY,
      origin: "bottom",
    },
  },
];

targetElements.push({
  element: ".skill-card",
  animation: {
    delay: FAST_DELAY,
    origin: "bottom",
  },
});

targetElements.push({
  element: ".timeline-item",
  animation: {
    delay: FAST_DELAY,
    origin: "bottom",
  },
});
