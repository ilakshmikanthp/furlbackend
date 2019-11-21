//#region Global Imports
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
//#endregion Global Imports

@Entity({ name:'at_leave_type' })
export class LeaveType {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column({ name: 'code', type: "varchar", length: 10, default: 0})
	code: string;

	@Column({ name: 'description', type: "varchar", length: 100, default: 0})
	description: string;

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
	
	constructor(code:string,description:string,
		isDeleted:number, createdAt:string, createdBy:number, updatedAt:string, updatedBy:number){
			this.code=code;
			this.description=description;
			this.isDeleted=isDeleted;
			this.createdAt=createdAt;
			this.createdBy=createdBy;
			this.updatedAt=updatedAt;
			this.updatedBy=updatedBy;
	}
}
