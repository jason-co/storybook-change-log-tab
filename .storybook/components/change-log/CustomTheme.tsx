import React from 'react';
import styled from 'styled-components';

const StyledCustomTheme = styled.div`
    h1 {
        margin-bottom: 1.5rem;
    }
    .MuiDivider-root {
        margin-top: 0.5rem;
        margin-bottom 1rem;
    }
    .MuiChip-root {
        height: auto;
        padding: 0.15rem 0;
    }
`;

export const CustomTheme = ({ children }) => {
    return <StyledCustomTheme>{children}</StyledCustomTheme>;
};

export default CustomTheme;
