import { NavLayout } from "layouts";
import { CITIES } from "data"

export function NavScreen() {
  return (
    <NavLayout 
      background={CITIES.humanCapital.backgroundImage} 
      track={CITIES.humanCapital.backgroundMusic}
    >
      <NavLayout.Menu>
        {CITIES.humanCapital.navigation.map(props => (
          <NavLayout.MenuItem {...props} />
        ))}
      </NavLayout.Menu>
    </NavLayout>
  )
}
