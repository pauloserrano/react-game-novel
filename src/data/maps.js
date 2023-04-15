import { Run, StabbedNote } from "components";
import humanCapitalMusic from "assets/music/harp.mp3"
import humanCapitalBG from "assets/images/background/human-city.jpg"
import demoBG from "assets/images/background/title.jpg"

export const MAPS = Object.freeze([
  {
    name: "Human Capital",
    backgroundImage: humanCapitalBG,
    backgroundMusic: humanCapitalMusic,
    navigation: [
      { icon: StabbedNote, name: "Notice Board" },
      { icon: Run, name: "Leave" }
    ]
  },

  {
    name: "Demo",
    backgroundImage: demoBG,
    backgroundMusic: humanCapitalMusic,
    navigation: [
      { icon: StabbedNote, name: "Notice Board" },
      { icon: Run, name: "Leave" }
    ]
  }
])