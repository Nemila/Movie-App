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
    box-shadow: 0 0 5px 0 black;
  }

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
`;

export const Badge = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  padding: 0 4px;
  background: rgba(0, 0, 0, 0.8);
  font-size: 12px;
  position: absolute;
  top: 4px;
  ${({ right }) => (right ? "left: 4px" : "right: 4px")};
`;

export const CardDesc = styled.p`
  font-size: 12px;
  line-height: 1rem;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Poster = styled.img`
  width: 100%;
  object-fit: cover;
`;
