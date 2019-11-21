import { ClientGeoLocationRepository } from '../../../src/Repositories/ClientGeoLocation';

describe('Test ClientGeoLocationRepository constructor', () => {
	it('should create an empty options', () => {
		expect(ClientGeoLocationRepository).toBeDefined();
	});

	it('should work (method name)', async () => {
		const result = await ClientGeoLocationRepository.methodName(1);
		expect(result).toBeDefined();
	});
});
