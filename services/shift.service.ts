//#region Global Imports
import { Context } from 'moleculer';
import { Action, BaseSchema, Method } from 'moleculer-decorators';
import { getConnection } from 'typeorm';
//#endregion Global Imports

//#region Local Imports
import { } from '@ServiceHelpers';
import { } from '@Repositories';
import connectionInstance from "@Entities/Connection"
//#endregion Local Imports

//#region Interface Imports
import { } from '@Interfaces';
//#endregion Interface Imports

export class ShiftService extends BaseSchema {

	public name: string = 'shift';
	public started: Function = async () => await connectionInstance();

	/**
	* @swagger
	*
	*  /shift/<methodName>:
	//Example usage of swagger https://swagger.io/docs/specification/2-0/basic-structure/ }}//
	*      responses:
	*        200:
	*          description: Response message
	*        422:
	*          description: Response message
	*/
	@Action({
		params: {

		}
	})
	public async Shift() {
		const response = await this.ShiftMethod();

		return response;
	}

	@Method
	public async ShiftMethod() {
		const connection = await getConnection();
		const isConnected: boolean = connection.isConnected;
		return "Get all Shift details." + isConnected;
	}

	public stopped: Function = async () => await getConnection().close();
}

module.exports = new ShiftService();