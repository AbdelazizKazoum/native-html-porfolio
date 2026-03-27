import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import initCardGlow from "./scripts/cardGlow";
import initActiveMenu from "./scripts/activeMenu";
import {targetElements, defaultProps} from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
initCardGlow();
initActiveMenu();
