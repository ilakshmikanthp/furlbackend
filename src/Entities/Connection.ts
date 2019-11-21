//#region Global Imports
import { createConnection, Connection, getConnection } from 'typeorm';
//#endregion Global Imports

export default async (): Promise<Connection | undefined> => {
	try {
		return await createConnection({
			type: "postgres",
			host: "localhost",
			name: 'default',
			port: 5432,
			username: "postgres",
			password: "postgres",
			database: "dwsat_test",
			synchronize: true, // Production Make It FALSE
			logging: "all",
			logger: "file", // For Console use - "advanced-console"
			entities: [
			   __dirname + "/*"
			]
		 });
	} catch (error) {
		return undefined;
	}
};
