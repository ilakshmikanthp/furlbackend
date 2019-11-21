//#region Global Imports
import { ServiceSchema } from 'moleculer';
import ApiGateway = require('moleculer-web');
//#endregion Global Imports

const ApiService: ServiceSchema = {
	name: 'v2',
	version: 2,
	mixins: [ApiGateway],

	// More info about settings: https://moleculer.services/docs/0.13/moleculer-web.html
	settings: {
		port: process.env.PORT || 3000,

		routes: [
			{
				aliases: {},
				cors: {
					credentials: true,
					methods: ['GET', 'OPTIONS', 'POST', 'PUT', 'DELETE'],
					origin: ['*'],
				},
				path: '/v2',
			},
		],

		// Serve assets from 'public' folder
		assets: {
			folder: 'public',
		},
	}
};

export = ApiService;
