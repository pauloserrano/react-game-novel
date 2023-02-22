import { useState } from "react";
import { NavLayout } from "layouts";
import { Modal, Run, StabbedNote } from "components";

export function NavScreen() {
  const [showModal, setShowModal] = useState(false)

  return (
    <NavLayout>
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
