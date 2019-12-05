let svgo: any = null;

function assertString(value: unknown): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error(`value is not string, value is ${typeof value}`);
    }
}

export async function optimizeSVG(svgText: string): Promise<string | null> {
    if (!svgo) return null;

    const { data } = await svgo.optimize(svgText);

    assertString(data);

    return data;
}

console.time('worker:load-svgo');
(async function(): Promise<void> {
    const imported = await import(
        /* webpackChunkName: "svgo" */ '../../../svgo'
    );
    const SVGO = imported.default;
    svgo = new SVGO();
    console.timeEnd('worker:load-svgo');
})();
