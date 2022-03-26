import React from "react";
import { Button } from "./styled/Button.styled";
import { StyledCont, StyledNumber } from "./styled/NexPage.styled";

const Nextpage = ({ pageIndex, setPageIndex }) => {
  return (
    <StyledCont>
      {pageIndex !== 1 && (
        <Button onClick={() => setPageIndex((prev) => prev - 1)}>Prev</Button>
      )}
      <StyledNumber>{pageIndex}</StyledNumber>
      <Button onClick={() => setPageIndex((prev) => prev + 1)}>Next</Button>
    </StyledCont>
  );
};

export default Nextpage;
