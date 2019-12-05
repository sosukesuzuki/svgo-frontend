import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import { workerContext } from './lib/contexts';
import WorkerProxy from './WorkerProxy';
import App from './components/App';

async function main(): Promise<void> {
    const proxy = await new (WorkerProxy as any)();
    ReactDOM.render(
        <workerContext.Provider value={proxy}>
            <App />
        </workerContext.Provider>,
        document.querySelector('.root'),
    );
}

main();
