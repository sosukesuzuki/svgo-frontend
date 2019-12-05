import React from 'react';
import styled from 'styled-components';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/mode-html';

const Container = styled.div`
    margin: 10px 0;
`;

interface Props {
    value: string;
    onChange: (value: string, event?: any) => void;
}

const CodeEditor: React.FC<Props> = ({ onChange, value }) => {
    return (
        <Container>
            <AceEditor
                value={value}
                theme="github"
                mode="html"
                width="800px"
                height="300px"
                onChange={onChange}
            />
        </Container>
    );
};

export default CodeEditor;
