import { ClientMasterRepository } from '../../../src/Repositories/ClientMaster';

describe('Test ClientMasterRepository constructor', () => {
	it('should create an empty options', () => {
		expect(ClientMasterRepository).toBeDefined();
	});

	it('should work (method name)', async () => {
		const result = await ClientMasterRepository.methodName(1);
		expect(result).toBeDefined();
	});
});
