interface Window {
	ethereum: {
		request: (request: { method: string; params?: any[] }) => Promise<any>;
	};
	// cardano: {
	// 	lace: {
	// 		open: any;
	// 		request: (request: { method: string; params?: any[] }) => Promise<any>;
	// 	};
	// }
	cardano: {
		lace: any;
	}

};