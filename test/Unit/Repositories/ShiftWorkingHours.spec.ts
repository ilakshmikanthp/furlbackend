import { ShiftWorkingHoursRepository } from '../../../src/Repositories/ShiftWorkingHours';

describe('Test ShiftWorkingHoursRepository constructor', () => {
	it('should create an empty options', () => {
		expect(ShiftWorkingHoursRepository).toBeDefined();
	});

	it('should work (method name)', async () => {
		const result = await ShiftWorkingHoursRepository.methodName(1);
		expect(result).toBeDefined();
	});
});
