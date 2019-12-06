import React, { Suspense, useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Spinner, Pre, Code } from '@blueprintjs/core';
import {
    svgContentContext,
    useOptimizedSvg,
    useSvgContentContext,
} from '../lib/contexts';
const CodeEditor = React.lazy(() => import('./CodeEditor'));

const Main = () => {
    const { svgContent, setSvgContent } = useSvgContentContext();
    const optimizedSvgContent = useOptimizedSvg();
    return (
        <Suspense fallback={<Spinner />}>
            <Container>
                <h3>Enter your svg content({svgContent.length} chars):</h3>
                <CodeEditor
                    value={svgContent}
                    onChange={e => {
                        setSvgContent(e.target.value);
                    }}
                />
                <h3>
                    Optimized your svg content({optimizedSvgContent.length}{' '}
                    chars):
                </h3>
                <Pre>
                    <Code>{optimizedSvgContent}</Code>
                </Pre>
            </Container>
        </Suspense>
    );
};

const Container = styled.div`
    width: 800px;
    margin: 0 auto;
    code {
        white-space: normal;
    }
`;

const App = () => {
    const [svgContent, setSvgContent] = useState('');
    return (
        <div>
            <Navbar />
            <svgContentContext.Provider value={{ svgContent, setSvgContent }}>
                <Main />
            </svgContentContext.Provider>
        </div>
    );
};

export default App;
