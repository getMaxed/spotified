import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit
    }

    html {
        box-sizing: border-box;
        font-family: Georgia, 'Times New Roman', Times, serif
    }
`;
