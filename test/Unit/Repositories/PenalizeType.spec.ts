import { PenalizeTypeRepository } from '../../../src/Repositories/PenalizeType';

describe('Test PenalizeTypeRepository constructor', () => {
	it('should create an empty options', () => {
		expect(PenalizeTypeRepository).toBeDefined();
	});

	it('should work (method name)', async () => {
		const result = await PenalizeTypeRepository.methodName(1);
		expect(result).toBeDefined();
	});
});
