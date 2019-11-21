//#region Global Imports
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
//#endregion Global Imports

//#region Global Imports
import { ShiftMaster } from './ShiftMaster';
//#endregion Global Imports

@Entity({ name:'at_shift_weeklyoff' })
export class ShiftWeeklyOff {
	
	@PrimaryGeneratedColumn()
	id?: number;

	@OneToOne(type => ShiftMaster, shiftID => shiftID.id)
    @JoinColumn({ name: 'shift_id'})
	shiftID: ShiftMaster;
	
	@Column({ name: 'week_number', type: "numeric", precision: 1, default: 0})
	weekNumber: number;

	@Column({ type: "numeric", precision: 1, default: 0})
	sun: number;
	
	@Column({ type: "numeric", precision: 1, default: 0})
	mon: number;
	
	@Column({ type: "numeric", precision: 1, default: 0})
	tue: number;
	
	@Column({ type: "numeric", precision: 1, default: 0})
	wed: number;
	
	@Column({ type: "numeric", precision: 1, default: 0})
	thu: number;

	@Column({ type: "numeric", precision: 1, default: 0})
	fri: number;

	@Column({ type: "numeric", precision: 1, default: 0})
	sat: number;
	
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

	constructor(shiftID:ShiftMaster, weekNumber:number, sun:number, mon:number, tue:number, wed:number, thu:number, fri:number, sat:number,
		isDeleted:number, createdAt:string, createdBy:number, updatedAt:string, updatedBy:number){
			this.shiftID=shiftID;
			this.weekNumber=weekNumber;
			this.sun=sun;
			this.mon=mon;
			this.tue=tue;
			this.wed=wed;
			this.thu=thu;
			this.fri=fri;
			this.sat=sat;
			this.isDeleted=isDeleted;
			this.createdAt=createdAt;
			this.createdBy=createdBy;
			this.updatedAt=updatedAt;
			this.updatedBy=updatedBy;
	}
}
