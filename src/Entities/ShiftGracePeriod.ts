//#region Global Imports
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
//#endregion Global Imports

//#region Local Imports
import { ShiftMaster } from './ShiftMaster';
import { PenalizeLeaveConfig } from './PenalizeLeaveConfig';
//#endregion Local Imports

@Entity({ name:'at_shift_grace_period'})
export class ShiftGracePeriod {
	@PrimaryGeneratedColumn()
	id?: number;

	// Foreign Key - Shift ID
	@OneToOne(type => ShiftMaster, shiftID => shiftID.id)
    @JoinColumn({ name: 'shift_id'})
	shiftID: ShiftMaster;
	
	@Column({ name: 'punch_in_out_type', type: "numeric", precision: 1, default: 0, nullable: true})
	punchInOutType: number;

	@Column({ name: 'punch_grace_time', type: "numeric", precision: 6, default: 0, nullable: true})
	punchGraceTime: number;

	@Column({ name: 'punch_no_of_times_weekly', type: "integer", default: 0, nullable: true})
	punchNoOfTimesWeekly: number;

	@Column({ name: 'punch_no_of_times_monthly', type: "integer", default: 0, nullable: true})
	punchNoOfTimesMonthly: number;
	
	@OneToOne(type => PenalizeLeaveConfig, PenalizeLeaveId => PenalizeLeaveId.id)
    @JoinColumn({ name: 'Penalize_leave_id'})
	PenalizeLeaveId?: PenalizeLeaveConfig;

	@Column({ name: 'in_margin', type: "time", nullable: true})
	inMargin: string;

	@Column({ name: 'out_margin', type: "time", nullable: true})
	outMargin: string;
	
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

	constructor(shiftID: ShiftMaster, punchInOutType:number, punchGraceTime:number, punchNoOfTimesWeekly:number, punchNoOfTimesMonthly:number, inMargin:string, outMargin:string, 
		isDeleted:number, createdAt:string, createdBy:number, updatedAt:string, updatedBy:number){
		this.shiftID=shiftID;
		this.punchInOutType=punchInOutType;
		this.punchGraceTime=punchGraceTime;
		this.punchNoOfTimesWeekly=punchNoOfTimesWeekly;
		this.punchNoOfTimesMonthly=punchNoOfTimesMonthly;
		this.inMargin=inMargin;
		this.outMargin=outMargin;
		this.isDeleted=isDeleted;
		this.createdAt=createdAt;
		this.createdBy=createdBy;
		this.updatedAt=updatedAt;
		this.updatedBy=updatedBy;
	}
}
