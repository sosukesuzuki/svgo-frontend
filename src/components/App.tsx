import React, { Suspense, useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Spinner, Button, Text } from '@blueprintjs/core';
import { svgContentContext } from '../lib/contexts';
const CodeEditor = React.lazy(() => import('./CodeEditor'));

const Container = styled.div`
    width: 800px;
    margin: 0 auto;
`;

const App = () => {
    const [svgContent, setSvgContent] = useState('');
    return (
        <div>
            <Navbar />
            <svgContentContext.Provider value={{ svgContent, setSvgContent }}>
                <Suspense fallback={<Spinner />}>
                    <Container>
                        <Text>Enter your svg content:</Text>
                        <CodeEditor
                            value={svgContent}
                            onChange={e => {
                                setSvgContent(e.target.value);
                            }}
                        />
                        <Button>run</Button>
                    </Container>
                </Suspense>
            </svgContentContext.Provider>
        </div>
    );
};

export default App;
