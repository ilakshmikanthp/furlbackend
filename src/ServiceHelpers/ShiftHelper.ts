//#region Global Imports
import { Context } from 'moleculer';
//#endregion Global Imports

//#region Interface Imports
import { } from '@Interfaces';
//#endregion Interface Imports

export module ShiftHelper {

	const prefix: string = 'shift';

	export const ShiftMethod = async (ctx: Context) => await ctx.call(`${prefix}.methodName`);

}