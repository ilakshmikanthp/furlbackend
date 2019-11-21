//#region Global Imports
import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';
//#endregion Global Imports

@Entity({ name: 'at_shift' })
export class ShiftMaster {
	@PrimaryGeneratedColumn()
	id?: number;

	@Index({ unique: true })
	@Column({ name: 'name', type: "varchar", length: 20})
	name: string;

	@Column({ name: 'description', type: "varchar", length: 100, nullable: true})
	description: string;

	@Column({ name: 'start_time', type: "time"})
	startTime: string;

	@Column({ name: 'end_time', type: "time"})
	endTime: string;

	@Column({ name: 'is_default', default:false})
	isDefault: boolean;

	@Column({ name: 'is_night', default:false})
	isNight: boolean;

	@Column({ name: 'is_allweekoff', type: "numeric", precision: 1, scale: 0, default: 0})
	isAllweekoff: number;
	
	@Column({ name: 'is_flexi', default:false})
	isFlexi: boolean;

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

	constructor(name:string, description:string, startTime:string, endTime:string, isDefault:boolean, 
		isNight:boolean, isAllweekoff:number, isFlexi:boolean, isDeleted:number, createdAt:string, 
		createdBy:number, updatedAt:string, updatedBy:number){
		this.name=name;
		this.description=description;
		this.startTime=startTime;
		this.endTime=endTime;
		this.isDefault=isDefault;
		this.isNight=isNight;
		this.isAllweekoff=isAllweekoff;
		this.isFlexi=isFlexi;
		this.isDeleted=isDeleted;
		this.createdAt=createdAt;
		this.createdBy=createdBy;
		this.updatedAt=updatedAt;
		this.updatedBy=updatedBy;
	}
}
