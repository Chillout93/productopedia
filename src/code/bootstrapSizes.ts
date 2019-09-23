const isBootstrapExtraSmall = (window: Window) => window.innerWidth < 576;
const isBootstrapSmall = (window: Window) => window.innerWidth >= 576 && window.innerWidth < 768;
const isBootstrapMedium = (window: Window) => window.innerWidth >= 768 && window.innerWidth < 992;
const isBoostrapLarge = (window: Window) => window.innerWidth >= 992 && window.innerWidth < 1200;
const isBootstrapExtraLarge = (window: Window) => window.innerWidth >= 1200;

export const isSmallDisplay = (window: Window) => isBootstrapExtraSmall(window) || isBootstrapSmall(window) || isBootstrapMedium(window);