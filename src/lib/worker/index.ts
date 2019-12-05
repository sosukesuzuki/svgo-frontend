import { expose } from 'comlink';
import { optimizeSVG } from './optimizeSVG';

export class WorkerAPI {
    optimizeSVG(svgText: string): Promise<string | null> {
        return optimizeSVG(svgText);
    }
}

expose(WorkerAPI);
