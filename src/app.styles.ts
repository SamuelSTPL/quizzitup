import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
    height: 100%;
}
body{
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%; 
    position: relative;
  }
  
  *{
    box-sizing: border-box;
    font-family: "Catamaran", sans-serif;
  }
  `;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: relative;
  padding: 50px;

  > p {
    color: white;
  }

  .score {
    color: whitesmoke;
    font-size: 3.5rem;
    font-family: Fascinate Inline, Haettenschweiler, "Arial Narrow Bold",
      sans-serif;
    background-image: linear-gradient(180deg, white, #87f1ff);
    background-size: 100%auto;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-weight: 400;
    text-align: center;
    margin: auto;
  }

  .score-span {
    font-size: 4.5rem;
  }

  h1 {
    font-family: Fascinate Inline, Haettenschweiler, "Arial Narrow Bold",
      sans-serif;
    background-image: linear-gradient(180deg, white, #87f1ff);
    background-size: 100%auto;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: -100px 20px 0 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #87f1ff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
`;
