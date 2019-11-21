//#region Global Imports
//#endregion Global Imports

//#region Local Imports
import { ShiftHelper } from '@ServiceHelpers';
import { BrokerHelper } from '@Test/Utils';
//#endregion Local Imports

//#region Interface Imports
import { } from '@Interfaces';
//#endregion Interface Imports

const broker = BrokerHelper.setupBroker();

describe('Test Shift service', () => {

	beforeAll(() => broker.start());
	afterAll(() => broker.stop());

	describe('Test Shift service actions', async () => {

		it('', async () => {
			const params = {
				// params
			};

			await ShiftHelper.ShiftMethod(broker as any);
		});
	});

});