//#region Global Imports
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
//#endregion Global Imports

//#region Local Imports
import { ShiftMaster } from './ShiftMaster';
import { PenalizeLeaveConfig } from './PenalizeLeaveConfig';
//#endregion Local Imports

@Entity({ name:'at_shift_working_hour' })
export class ShiftWorkingHours {
	
	@PrimaryGeneratedColumn()
	id?: number;

	// Foreign Key - Shift ID
	@OneToOne(type => ShiftMaster, shiftID => shiftID.id)
    @JoinColumn({ name: 'shift_id'})
	shiftID?: ShiftMaster;
	
	@Column({ name: 'time_cal_config', type: "numeric", precision: 1, default: 0})
	timeCalConfig: number;

	@Column({ name: 'enforce_category', type: "numeric", precision: 1, default: 0})
	enforceCategory: number;

	@Column({ name: 'week_no_of_hours', type: "numeric", precision: 3, default: 0})
	weekNoOfHours: number;

	@Column({ name: 'week_min_day_hours', type: "numeric", precision: 1, default: 0})
	weekMinDayHours: number;

	@Column({ name: 'daily_min_full_hours', type: "numeric", precision: 1, default: 0})
	dailyMinFullHours: number;

	@Column({ name: 'daily_min_half_hours', type: "numeric", precision: 1, default: 0})
	dailyMinHalfHours: number;
	
	@OneToOne(type => PenalizeLeaveConfig, PenalizeLeaveId => PenalizeLeaveId.id)
    @JoinColumn({ name: 'Penalize_leave_id'})
	PenalizeLeaveId?: PenalizeLeaveConfig;
	
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

	constructor(timeCalConfig:number,
		enforceCategory:number, weekNoOfHours:number, weekMinDayHours:number, dailyMinFullHours:number, dailyMinHalfHours:number, 
		isDeleted:number, createdAt:string, createdBy:number, updatedAt:string, updatedBy:number){
		this.timeCalConfig = timeCalConfig;
		this.enforceCategory=enforceCategory;
		this.weekNoOfHours=weekNoOfHours;
		this.weekMinDayHours=weekMinDayHours;
		this.dailyMinFullHours=dailyMinFullHours;
		this.dailyMinHalfHours=dailyMinHalfHours;
		this.isDeleted=isDeleted;
		this.createdAt=createdAt;
		this.createdBy=createdBy;
		this.updatedAt=updatedAt;
		this.updatedBy=updatedBy;
	}
}
