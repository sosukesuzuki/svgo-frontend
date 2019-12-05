import { createContext, useContext } from 'react';

export interface SvgContentContextState {
    svgContent: string;
    setSvgContent: (value: string) => void;
}

export const svgContentContext = createContext<SvgContentContextState>({
    svgContent: null as any,
    setSvgContent: null as any,
});
export function useSvgContentContext() {
    return useContext(svgContentContext);
}
