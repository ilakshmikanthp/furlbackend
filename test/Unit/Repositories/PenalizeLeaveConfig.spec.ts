import { PenalizeLeaveConfigRepository } from '../../../src/Repositories/PenalizeLeaveConfig';

describe('Test PenalizeLeaveConfigRepository constructor', () => {
	it('should create an empty options', () => {
		expect(PenalizeLeaveConfigRepository).toBeDefined();
	});

	it('should work (method name)', async () => {
		const result = await PenalizeLeaveConfigRepository.methodName(1);
		expect(result).toBeDefined();
	});
});
