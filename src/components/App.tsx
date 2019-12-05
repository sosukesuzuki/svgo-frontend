import React, { useState } from 'react';
import { useWorkerContext } from '../lib/contexts';
import Navbar from './Navbar';

const App = () => {
    const WorkerAPI = useWorkerContext();
    const [f, setF] = useState<string | null>('');
    return (
        <div>
            <Navbar />
            <button
                onClick={async () => {
                    const data = await WorkerAPI.optimizeSVG(`<svxg version="1.1" width="10" height="20">
                test
            </svg>`);
                    setF(data);
                }}
            >
                foo
            </button>
            <p>{f}</p>
        </div>
    );
};

export default App;
