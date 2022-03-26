import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 250px;
  background-color: #444444;
  padding: 4px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  &:hover {
    transform: scale(0.95);
  }
  & p {
    font-size: 12px;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Badge = styled.span`
  position: absolute;
  padding: 4px;
  background: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  top: 4px;
  left: 4px;
  & > img {
    width: 12px;
    margin-right: 8px;
  }
`;
