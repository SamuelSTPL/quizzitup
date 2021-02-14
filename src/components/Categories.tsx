import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  setCategory: (arg: number) => void;
};

const Categories: FC<Props> = ({ setCategory }) => {
  const handleChange = (e: any) => {
    e.preventDefault();
    setCategory(e.target.value);
  };

  return (
    <Wrapper>
      <label>Category:</label>
      <Select
        name="categories"
        id="categories"
        onChange={(e) => handleChange(e)}
      >
        <option value="9">General</option>
        <option value="10">Books</option>
        <option value="11">Films</option>
        <option value="12">Music</option>
        <option value="14">Television</option>
        <option value="15">Games</option>
        <option value="17">Nature</option>
        <option value="18">Computers</option>
        <option value="21">Sports</option>
        <option value="22">Geography</option>
        <option value="23">History</option>
        <option value="24">Politics</option>
        <option value="25">Arts</option>
        <option value="26">Celebrities</option>
        <option value="27">Animals</option>
        <option value="28">Vehicules</option>
        <option value="29">Comics</option>
      </Select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 40px 0;
  display: flex;
  align-items: center;

  > label {
    font-size: 2rem;
    margin-right: 20px;
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
  }
`;

const Select = styled.select`
  width: 150;
  border: none;
  font-size: 1.5rem;
  margin-top: 5px;
  font-family: Fascinate Inline, Haettenschweiler, "Arial Narrow Bold",
    sans-serif;
  background-image: linear-gradient(180deg, white, #87f1ff);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  filter: drop-shadow(2px 2px #0085a3);

  &:focus {
    outline: none;
  }
  > option {
    font-size: 1rem;
  }
`;

export default Categories;
