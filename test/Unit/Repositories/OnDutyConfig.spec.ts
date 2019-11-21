import { OnDutyConfigRepository } from '../../../src/Repositories/OnDutyConfig';

describe('Test OnDutyConfigRepository constructor', () => {
	it('should create an empty options', () => {
		expect(OnDutyConfigRepository).toBeDefined();
	});

	it('should work (method name)', async () => {
		const result = await OnDutyConfigRepository.methodName(1);
		expect(result).toBeDefined();
	});
});
