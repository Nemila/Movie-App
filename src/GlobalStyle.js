import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    body {
        background-color: #171717;
        color: #EDEDED;
        font-family: Quicksand;
    }

    p, span {
        line-height: 28px;
    }

    form small {
        opacity: .6;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #444444;
        border-radius: 1rem;
        &:hover {
            background-color: #e9e9eb;
        }
    }
`;
