interface Window {
	ethereum: {
		request: (request: { method: string; params?: any[] }) => Promise<any>;
	};
	cardano: {
		lace: any;
	}
};