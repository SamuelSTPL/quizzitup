import React from "react";
import styled from "styled-components";

type Props = {
  setBackground: (arg: string) => void;
};

const ChooseBackground: React.FC<Props> = ({ setBackground }) => {
  return (
    <Wrapper>
      <p>Change the background</p>
      <button onClick={() => setBackground("beach")}>Beach</button>
      <button onClick={() => setBackground("trees")}>Palm Trees</button>
      <button onClick={() => setBackground("sunset")}>Sunset</button>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default ChooseBackground;
