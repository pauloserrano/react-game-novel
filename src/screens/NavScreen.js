import { NavLayout } from "layouts/NavLayout";
import { Run, StabbedNote } from "components/Icons";
import { Modal } from "components/Modal";
import { useState } from "react";


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
