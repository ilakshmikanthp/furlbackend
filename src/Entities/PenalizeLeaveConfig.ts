//#region Global Imports
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
//#endregion Global Imports

//#region Local Imports
import { PenalizeType } from './PenalizeType';
import { LeaveType } from './LeaveType';
//#endregion Local Imports

@Entity({ name:'at_penalize_leave_config' })
export class PenalizeLeaveConfig {
	@PrimaryGeneratedColumn()
	id?: number;

	// Foreign Key - Penalize Type ID
	@OneToOne(type => PenalizeType, penalizeId => penalizeId.id)
	@JoinColumn({ name: 'penalize_id'})
	penalizeId?: PenalizeType;

	// Foreign Key - Leave Type ID
	@OneToOne(type => LeaveType, leaveId => leaveId.id)
    @JoinColumn({ name: 'leave_id'})
	leaveId?: LeaveType;

	@Column({ name: 'leave_order', type: "numeric", precision: 3, scale:0, default: 0})
	leaveOrder: number;

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
	
	constructor(leaveOrder:number, isDeleted:number, createdAt:string, createdBy:number, updatedAt:string, updatedBy:number){
			this.leaveOrder=leaveOrder;
			this.isDeleted=isDeleted;
			this.createdAt=createdAt;
			this.createdBy=createdBy;
			this.updatedAt=updatedAt;
			this.updatedBy=updatedBy;
	}
}
