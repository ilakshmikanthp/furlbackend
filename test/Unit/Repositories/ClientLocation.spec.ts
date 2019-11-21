import { ClientLocationRepository } from '../../../src/Repositories/ClientLocation';

describe('Test ClientLocationRepository constructor', () => {
	it('should create an empty options', () => {
		expect(ClientLocationRepository).toBeDefined();
	});

	it('should work (method name)', async () => {
		const result = await ClientLocationRepository.methodName(1);
		expect(result).toBeDefined();
	});
});
