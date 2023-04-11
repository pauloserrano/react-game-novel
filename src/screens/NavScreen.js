import { useState } from "react";
import { NavLayout } from "layouts";
import { Modal, Run, StabbedNote } from "components";
import music from "assets/music/harp.mp3"
import bg from "assets/images/background/human-city.jpg"

export function NavScreen() {
  const [showModal, setShowModal] = useState(false)

  return (
    <NavLayout background={bg} track={music}>
      <NavLayout.Menu>
        <NavLayout.MenuItem 
          Icon={StabbedNote} 
          name={"Notice Board"}
          onClick={() => setShowModal(prev => !prev)}
        />
        <NavLayout.MenuItem Icon={Run} name={"Leave"} />
      </NavLayout.Menu>
      {showModal && <Modal />}
    </NavLayout>
  )
}
