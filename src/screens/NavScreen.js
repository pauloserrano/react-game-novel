import { NavLayout } from "layouts";
import { useGMContext } from "hooks";

export function NavScreen() {
  const { state } = useGMContext()

  return (
    <NavLayout 
      background={state.currentMap.backgroundImage} 
      track={state.currentMap.backgroundMusic}
    >
      <NavLayout.Menu>
        {state.currentMap.navigation.map(props => (
          <NavLayout.MenuItem {...props} />
        ))}
      </NavLayout.Menu>
    </NavLayout>
  )
}
