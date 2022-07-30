import Home from "../Components/Home/Home";
import AboutMe from "../Components/AboutMe/AboutMe";
import Resume from "../Components/Resume/Resume";
import Projects from "../Components/Projects/Projects";
import ContactMe from "../Components/ContactMe/ContactMe";

export const TOTAL_SCREENS = [
  {
    screen_name: "Acceuil", // The name that will be screened in the navigation menu
    component: Home, // Witch component it refers to :
  },
  {
    screen_name: "À Propos de Moi",
    component: AboutMe,
  },
  {
    screen_name: "Cursus",
    component: Resume,
  },
  {
    screen_name: "Projets",
    component: Projects,
  },
  {
    screen_name: "Me contacter",
    component: ContactMe,
  },
];
export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }
  return -1;
};
