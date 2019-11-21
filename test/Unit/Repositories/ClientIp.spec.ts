import { ClientIpRepository } from '../../../src/Repositories/ClientIp';

describe('Test ClientIpRepository constructor', () => {
	it('should create an empty options', () => {
		expect(ClientIpRepository).toBeDefined();
	});

	it('should work (method name)', async () => {
		const result = await ClientIpRepository.methodName(1);
		expect(result).toBeDefined();
	});
});
