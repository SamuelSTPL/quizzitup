import React from "react";
import styled from "styled-components";

type Props = {
  setBackground: (arg: string) => void;
};

const ChooseBackground: React.FC<Props> = ({ setBackground }) => {
  return (
    <Wrapper>
      <p>Change the background:</p>
      <Overlay />
      <ButtonsContainer>
        <button onClick={() => setBackground("beach")}>Beach</button>
        <button onClick={() => setBackground("trees")}>Palm trees</button>
        <button onClick={() => setBackground("sunset")}>Sunset</button>
        <button onClick={() => setBackground("coastline")}>Coastline</button>
      </ButtonsContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 2%;
  left: 1%;
  width: 600px;
  border-radius: 10px;

  > p {
    font-size: 1.1rem;
    margin: 5px;
    text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
      1px 1px 1px rgba(0, 0, 0, 0.5), 2px 2px 2px rgba(0, 0, 0, 0);
    background: -webkit-linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(135, 241, 255, 1) 92%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Overlay = styled.div`
  border-radius: 10px;
  min-width: 100%;
  min-height: 100%;
  background: whitesmoke;
  position: absolute;
  mix-blend-mode: overlay;
  opacity: 0.7;
  z-index: 1;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  > button {
    background: transparent;
    border: none;
    cursor: pointer;
    width: 90px;
    margin: 5px;
    background: -webkit-linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(135, 241, 255, 1) 92%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &:focus {
      outline: none;
    }
  }
`;

export default ChooseBackground;
