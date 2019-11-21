//#region Global Imports
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
//#endregion Global Imports

//#region Local Imports
import { ClientLocation } from './ClientLocation';
//#endregion Local Imports


@Entity({ name:'at_client_geolocation' })
export class ClientGeoLocation {
	@PrimaryGeneratedColumn()
	id?: number;

	// Foreign Key - Shift ID
	@OneToOne(type => ClientLocation, locationId => locationId.id)
    @JoinColumn({ name: 'location_id'})
	locationId: ClientLocation;

	@Column({ name: 'latitude', type: "real"})
	latitude: number;

	@Column({ name: 'longitute', type: "real"})
	longitute: number;

	@Column({ name: 'plus_code', type: "varchar", length: 40, nullable: true})
	plusCode: string;
	
	@Column({ name: 'geo_radius', type: "numeric", precision: 6, scale: 3, default: 0})
	geoRadius: number;

	@Column({ name: 'address', type: "text", nullable: true})
	address: string;

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

	constructor(locationId: ClientLocation, latitude:number, longitute:number, plusCode:string, geoRadius:number, address:string,
		isDeleted:number, createdAt:string, createdBy:number, updatedAt:string, updatedBy:number){
		this.locationId = locationId;
		this.latitude=latitude;
		this.longitute=longitute;
		this.plusCode=plusCode;
		this.geoRadius=geoRadius;
		this.address=address;
		this.isDeleted=isDeleted;
		this.createdAt=createdAt;
		this.createdBy=createdBy;
		this.updatedAt=updatedAt;
		this.updatedBy=updatedBy;
	}
}
