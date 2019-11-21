//#region Local Imports
import { ShiftHelper } from '@ServiceHelpers';
import { DummyContext } from '@Test/Utils';
//#endregion Local Imports

//#region Interface Imports
import { IShift} from '@Interfaces';
//#endregion Interface Imports

describe('Shift Service Helper Constructor', () => {
	it('should module exist', async () => {
		expect(ShiftHelper).toBeDefined();
	});
});

describe('Shift service helpers', () => {
	it('', async () => {
		const params = {};

		const result = await ShiftHelper.ShiftMethod(DummyContext.getCall(params));

		expect(result).toBeDefined();
	});
});
