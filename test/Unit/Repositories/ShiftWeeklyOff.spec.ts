import { ShiftWeeklyOffRepository } from '../../../src/Repositories/ShiftWeeklyOff';

describe('Test ShiftWeeklyOffRepository constructor', () => {
	it('should create an empty options', () => {
		expect(ShiftWeeklyOffRepository).toBeDefined();
	});

	it('should work (method name)', async () => {
		const result = await ShiftWeeklyOffRepository.methodName(1);
		expect(result).toBeDefined();
	});
});
