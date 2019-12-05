const nope = (method: string) => (..._args: any[]): any[] => {
    throw new Error(`Cannot use util.${method} inside browser`);
};

export const inspect = nope('inspect');
