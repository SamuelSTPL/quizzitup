import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  error: boolean;
};

const PageError: FC<Props> = ({ error }) => {
  return (
    <Wrapper>
      <p>There was an error loading the questions, please refresh the page.</p>
      <p>
        If the error persist, the API server might be down. Come back another
        day!
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #5c97d3;
  z-index: 1000;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > p {
    color: white;

    font-size: 2rem;
  }
`;
export default PageError;
