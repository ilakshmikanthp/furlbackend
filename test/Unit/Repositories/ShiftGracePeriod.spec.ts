import { ShiftGracePeriodRepository } from '../../../src/Repositories/ShiftGracePeriod';

describe('Test ShiftGracePeriodRepository constructor', () => {
	it('should create an empty options', () => {
		expect(ShiftGracePeriodRepository).toBeDefined();
	});

	it('should work (method name)', async () => {
		const result = await ShiftGracePeriodRepository.methodName(1);
		expect(result).toBeDefined();
	});
});
