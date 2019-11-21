//#region Global Imports
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
//#endregion Global Imports

@Entity({ name:'at_on_duty_config' })
export class OnDutyConfig {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column({ name: 'regularize_past_days_limit', type: "integer", default: 0})
	regularizePastDaysLimit: number;

	@Column({ name: 'regularize_enable_day_limit', type: "integer", default: 0})
	regularizeEnableDayLimit: number;

	@Column({ name: 'days_to_raise_past', type: "numeric", precision: 3, default: 0})
	daysToRaisePast: number;

	@Column({ name: 'days_to_raisefuture', type: "numeric", precision: 1, default: 0})
	daysToRaisefuture: number;

	@Column({ name: 'out_of_office_allowed_limit', type: "numeric", precision: 1, default: 0})
	outOfficeAllowedLimit: number;

	@Column({ name: 'out_of_office_allowed_type', type: "numeric", precision: 1, default: 0})
	outOfficeAllowedType: number;
	
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

	constructor(regularizePastDaysLimit:number,
		regularizeEnableDayLimit:number, daysToRaisePast:number, daysToRaisefuture:number, outOfficeAllowedLimit:number, outOfficeAllowedType:number, 
		isDeleted:number, createdAt:string, createdBy:number, updatedAt:string, updatedBy:number){
		this.regularizePastDaysLimit = regularizePastDaysLimit;
		this.regularizeEnableDayLimit=regularizeEnableDayLimit;
		this.daysToRaisePast=daysToRaisePast;
		this.daysToRaisefuture=daysToRaisefuture;
		this.outOfficeAllowedLimit=outOfficeAllowedLimit;
		this.outOfficeAllowedType=outOfficeAllowedType;
		this.isDeleted=isDeleted;
		this.createdAt=createdAt;
		this.createdBy=createdBy;
		this.updatedAt=updatedAt;
		this.updatedBy=updatedBy;
	}
}
