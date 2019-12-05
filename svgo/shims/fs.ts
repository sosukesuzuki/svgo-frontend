const nope = (method: string) => (..._args: any[]): any[] => {
    throw new Error(`Cannot use fs.${method} inside browser`);
};

export const readFileSync = nope('readFileSync');
export const lstatSync = nope('lstatSync');
