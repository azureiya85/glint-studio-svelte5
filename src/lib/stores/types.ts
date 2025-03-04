export interface Service {
	heading: string;
	catchphrase: string;
	description: string;
	pricing: {
		monthly: number;
		yearly: number;
		features: string[];
	};
}

export interface Package {
	title: string;
	description: string;
	monthlyPrice: number;
	yearlyPrice: number;
	savings: string;
	services: string[];
	features: string[];
}
