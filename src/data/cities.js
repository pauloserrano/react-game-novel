import { Run, StabbedNote } from "components";
import music from "assets/music/harp.mp3"
import bg from "assets/images/background/human-city.jpg"

export const CITIES = Object.freeze({
  humanCapital: {
    backgroundImage: bg,
    backgroundMusic: music,
    navigation: [
      { icon: StabbedNote, name: "Notice Board" },
      { icon: Run, name: "Leave" }
    ]
  }
})