import React from "react";
import GlobalStyles from "./Components/GlobalStyles";
import styled from "styled-components";

import text from "./data";
import Paragraph from "./Components/Paragraph";

const AppContainer = styled.div`
    color: #063251;
    text-align: center;
`;

const Heading = styled.h1`
    padding: 2rem 0;
`;

function App() {
    return (
        <>
            <GlobalStyles />
            <AppContainer>
                <Heading>TIRED OF BORING LOREM IPSUM?</Heading>
                <Paragraph text={text} />
            </AppContainer>
        </>
    );
}

export default App;
