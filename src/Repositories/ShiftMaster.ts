//#region Local Imports
import { ShiftMaster } from '@Entities/ShiftMaster';
import { getResource } from './Shared';
//#endregion Local Imports

//#region Interface Imports
import { IShiftMaster } from '@Interfaces';
//#endregion Interface Imports

export namespace ShiftMasterRepository {
	// export const exampleMethod = async (): Promise<ShiftMaster> => {

	// 	return {};
	// };

	export const Get = async (shiftName: string): Promise<ShiftMaster> => {
		return await getResource(ShiftMaster, { where: { name: shiftName } });
	};
}
