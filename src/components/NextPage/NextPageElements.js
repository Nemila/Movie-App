import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledCont = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(30px, 80px));
  justify-content: center;
  grid-template-rows: 40px;
  gap: 10px;
  margin: 1rem 0;
`;
export const StyledNumber = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 100%;
  background-color: firebrick;
  color: white;
  text-decoration: none;
`;
