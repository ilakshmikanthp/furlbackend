//#region Global Imports
import { Entity, Column, Index, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
//#endregion Global Imports

//#region Local Imports
import { ClientMaster } from './ClientMaster';
//#endregion Local Imports

@Entity({ name:'at_client_location' })
export class ClientLocation {
	@PrimaryGeneratedColumn()
	id?: number;

	// Foreign Key - Shift ID
	@OneToOne(type => ClientMaster, clientId => clientId.id)
    @JoinColumn({ name: 'shift_id'})
	clientId?: ClientMaster;
	
	@Index({ unique: true })
	@Column({ name: 'name', type: "varchar", length: 20})
	name: string;

	@Column({ name: 'description', type: "varchar", length: 100, nullable: true})
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

	constructor(name:string, description:string, isDeleted:number, createdAt:string, createdBy:number, updatedAt:string, updatedBy:number){
		this.name=name;
		this.description=description;
		this.isDeleted=isDeleted;
		this.createdAt=createdAt;
		this.createdBy=createdBy;
		this.updatedAt=updatedAt;
		this.updatedBy=updatedBy;
	}
}
