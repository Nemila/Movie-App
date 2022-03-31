import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

export const MovieContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  row-gap: 5px;
  align-content: center;
  justify-content: space-around;
  justify-items: center;
  flex-grow: 1;
`;
export const Container = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 7rem;
`;
export const SearchWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;
export const SearchTip = styled.small`
  opacity: 0.6;
`;
export const Input = styled.input`
  outline: none;
  border: none;
  border-radius: 10px;
  background: #4444;
  color: white;
  margin: 1rem 0;
  padding: 1rem 1rem;
  width: 100%;
  &:focus {
    outline: 2px solid #da0037;
  }
`;
export const SearchBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  background-color: firebrick;
  color: white;
  border: none;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 8px;
  border-radius: 5px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    align-self: flex-start;
  }
`;
export const SearchIcon = styled(FaSearch)`
  margin-left: 8px;
`;
export const ErrorMessage = styled.p`
  color: firebrick;
  font-weight: bold;
  letter-spacing: 2px;
  word-spacing: 4px;
  width: 200px;
  margin-top: 60px;
  display: flex;
  align-items: center;
`;
export const ErrorIcon = styled(FaTimes)`
  width: 24px;
  height: 24px;
  padding: 4px;
  background-color: firebrick;
  color: white;
  border-radius: 100%;
  margin-right: 8px;
`;
export const Pending = styled.div`
  position: absolute;
  top: 60%;
  left: 40%;
  transform: translate(-50%, -50%);

  width: 64px;
  height: 64px;

  border: 10px solid white;
  border-color: white transparent white transparent;
  border-radius: 50%;

  animation: rotate 0.5s linear infinite;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }
`;
