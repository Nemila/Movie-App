import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 250px;

  background-color: #444444;
  padding: 4px;

  cursor: pointer;
  overflow: hidden;

  position: relative;

  transition: 0.5s ease all;
  animation: landing 0.5s linear 1;
  @keyframes landing {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
  &:hover {
    transform: scale(0.95);
    box-shadow: 0 0 5px 0 black;
  }
  & p {
    font-size: 12px;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  & > img {
    width: 100%;
    height: 200px;
    object-fit: cover;
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
