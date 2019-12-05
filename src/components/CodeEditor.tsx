import React from 'react';
import { TextArea } from '@blueprintjs/core';
import styled from 'styled-components';

const Container = styled.div`
    margin: 10px 0;
`;
interface Props {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const CodeEditor: React.FC<Props> = ({ onChange, value }) => {
    return (
        <Container>
            <TextArea value={value} onChange={onChange} fill />
        </Container>
    );
};

export default CodeEditor;
