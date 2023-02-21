import { NavLayout } from "layouts/NavLayout";
import { ReactComponent as Run } from "assets/icons/run.svg";

export function NavScreen() {
  return (
    <NavLayout>
      <NavLayout.Menu>
        <NavLayout.MenuItem Icon={Run}>Leave</NavLayout.MenuItem>
      </NavLayout.Menu>
    </NavLayout>
  )
}
