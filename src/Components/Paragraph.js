import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div``;

const Label = styled.label`
    font-size: 1.2rem;
    margin-right: 15px;
`;

const Input = styled.input`
    font-size: 1.2rem;
    width: 100px;
    height: 25px;
    margin: 15px;
`;

const Btn = styled.button`
    font-size: 1.2rem;
    background-color: #49a6e9;
    border: none;
    outline: none;
    padding: 5px;
    border-radius: 4px;
    color: #063251;
`;

const Para = styled.p`
    margin: 30px 10%;
    @media (min-width: 680px) {
        margin: 40px 30%;
    }
`;

const Paragraph = ({ text }) => {
    const [paragraphs, setParagraphs] = useState(0);
    const [data, setData] = useState([]);

    const paraGenerater = () => {
        if (paragraphs <= 0) {
            setParagraphs(0);
            setData(text.slice(0, 1));
        } else if (paragraphs >= 9) {
            setData(text.slice(0, 9));
        } else {
            setData(text.slice(0, paragraphs));
        }
    };

    return (
        <>
            <Container>
                <Label>ParaGraph:</Label>
                <Input
                    type="number"
                    onChange={(e) => {
                        setParagraphs(e.target.value);
                    }}
                    value={paragraphs}
                />
                <Btn onClick={paraGenerater}>Generate</Btn>

                {data.map((element, index) => {
                    return (
                        <>
                            <Para key={index}>{element}</Para>
                        </>
                    );
                })}
            </Container>
        </>
    );
};

export default Paragraph;
