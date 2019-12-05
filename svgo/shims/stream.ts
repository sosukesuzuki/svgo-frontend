const nope = (method: string) => (..._args: any[]): any[] => {
	throw new Error(`Cannot use stream.${method} inside browser`);
};

export const Stream = nope("Stream");
