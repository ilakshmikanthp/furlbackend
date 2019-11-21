//#region Global Imports
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
//#endregion Global Imports

//#region Local Imports
import { ClientLocation } from './ClientLocation';
//#endregion Local Imports

@Entity({ name:'at_client_ip' })
export class ClientIp {
	@PrimaryGeneratedColumn()
	id?: number;

	// Foreign Key - Shift ID
	@OneToOne(type => ClientLocation, locationId => locationId.id)
    @JoinColumn({ name: 'location_id'})
	locationId?: ClientLocation;

	@Column({ name: 'ip_from', type: "inet"})
	ipFrom: string;

	@Column({ name: 'ip_to', type: "inet", nullable: true})
	ipTo: string;

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

	constructor(ipFrom:string, ipTo:string, 
		isDeleted:number, createdAt:string, createdBy:number, updatedAt:string, updatedBy:number){
		this.ipFrom=ipFrom;
		this.ipTo=ipTo;
		this.isDeleted=isDeleted;
		this.createdAt=createdAt;
		this.createdBy=createdBy;
		this.updatedAt=updatedAt;
		this.updatedBy=updatedBy;
	}
}
