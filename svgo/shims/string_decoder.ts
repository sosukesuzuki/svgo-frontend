const nope = (method: string) => (..._args: any[]): any[] => {
	throw new Error(`Cannot use string_decoder.${method} inside browser`);
};

export const StringDecoder = nope("StringDecoder");
