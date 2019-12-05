import { createContext, useContext } from 'react';
import { WorkerAPI } from '../worker';

export const workerContext = createContext<WorkerAPI>(null as any);
export function useWorkerContext() {
    return useContext(workerContext);
}
