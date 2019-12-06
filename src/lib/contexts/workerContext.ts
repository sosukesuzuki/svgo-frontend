import { createContext, useContext, useEffect, useState } from 'react';
import { WorkerAPI } from '../worker';
import { useSvgContentContext } from './svgContentContext';

export const workerContext = createContext<WorkerAPI>(null as any);
export function useWorkerContext() {
    return useContext(workerContext);
}
export function useOptimizedSvg() {
    const [optimizedSvg, setOptimizedSvg] = useState('');
    const { svgContent } = useSvgContentContext();
    const WorkerAPI = useWorkerContext();
    useEffect(() => {
        WorkerAPI.optimizeSVG(svgContent).then(data => {
            if (data) {
                setOptimizedSvg(data);
            }
        });
    }, [svgContent]);
    return optimizedSvg;
}
