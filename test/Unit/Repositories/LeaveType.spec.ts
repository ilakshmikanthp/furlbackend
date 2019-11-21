import { LeaveTypeRepository } from '../../../src/Repositories/LeaveType';

describe('Test LeaveTypeRepository constructor', () => {
	it('should create an empty options', () => {
		expect(LeaveTypeRepository).toBeDefined();
	});

	it('should work (method name)', async () => {
		const result = await LeaveTypeRepository.methodName(1);
		expect(result).toBeDefined();
	});
});
