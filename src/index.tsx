import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

const Heading = () => {
    return <h1>foo</h1>;
};

ReactDOM.render(<Heading />, document.querySelector('.root'));
