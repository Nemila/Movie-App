import React from "react";
import { StyledCont, StyledNumber, StyledLink } from "./NextPageElements";
import { PropTypes } from "prop-types";

const Nextpage = ({ pageIndex, totalPages }) => {
  let page = parseInt(pageIndex);
  let nextPage = page + 1;
  let prevPage = page - 1;

  return (
    <StyledCont>
      {page !== 1 && <StyledLink to={"/movies/" + prevPage}>Prev</StyledLink>}
      <StyledNumber>{page}</StyledNumber>
      {page < totalPages && (
        <StyledLink to={"/movies/" + nextPage}>Next</StyledLink>
      )}
    </StyledCont>
  );
};

Nextpage.propTypes = {
  pageIndex: PropTypes.string.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Nextpage;
