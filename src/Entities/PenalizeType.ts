//#region Global Imports
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
//#endregion Global Imports

@Entity({ name:'at_penalize_type' })
export class PenalizeType {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column({ name: 'checkbox_reference', type: "numeric", precision: 1, default: 0})
	checkboxReference: number;

	@Column({ name: 'penalize_hour_limit', type: "numeric", precision: 6, default: 0})
	penalizeHourLimit: number;

	@Column({ name: 'deduct_type', type: "numeric", precision: 1, default: 0})
	deductType: number;

	@Column({ name: 'deduct_value', type: "numeric", precision: 6, scale:2, default: 0})
	deductValue: number;

	@Column({ name: 'is_deleted', type: "numeric", precision: 1, default: 0})
	isDeleted: number;

	@Column({ name: 'created_at', type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
	createdAt: string;

	@Column({ name: 'created_by', type: "integer"})
	createdBy: number;

	@Column({ name: 'updated_at', type: "timestamp", nullable: true})
	updatedAt: string;

	@Column({ name: 'updated_by', type: "integer", nullable: true})
	updatedBy: number;	
	
	constructor(checkboxReference:number,penalizeHourLimit:number,deductType:number,deductValue:number,
		isDeleted:number, createdAt:string, createdBy:number, updatedAt:string, updatedBy:number){
			this.checkboxReference=checkboxReference;
			this.penalizeHourLimit=penalizeHourLimit;
			this.deductType=deductType;
			this.deductValue=deductValue;
			this.isDeleted=isDeleted;
			this.createdAt=createdAt;
			this.createdBy=createdBy;
			this.updatedAt=updatedAt;
			this.updatedBy=updatedBy;
	}
}
