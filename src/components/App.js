import styled from "styled-components";
import { NavScreen } from "screens";
import { AudioProvider, GMProvider } from "hooks";

import "assets/styles/reset.css"
import "assets/styles/fonts.css"

export default function App() {
  return (
    <GlobalStyle>
      <AudioProvider>
        <GMProvider>

          <NavScreen />

        </GMProvider>
      </AudioProvider>
    </GlobalStyle>
  );
}

const GlobalStyle = styled.div`
  --color-primary: #E8CC70;
  --color-secondary: #AB682B;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: relative;
  font-family: 'Comfortaa', sans-serif;
  background-color: #b1b1b1;

  > * {
    width: min(1440px, 100%);
    aspect-ratio: 16 / 9;
    overflow: hidden;
    position: relative;
  }
`