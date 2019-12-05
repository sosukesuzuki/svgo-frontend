const nope = (method: string) => (..._args: any[]): any[] => {
	throw new Error(`Cannot use path.${method} inside browser`);
};

export const resolve = nope("resolve");
