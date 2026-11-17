import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('services')
export class Service{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar'})
    name:string;

    @Column({type:'text'})
    description:string;

    @Column()
    price:number;

    @Column({type:'int'})
    durationMinutes:number;

    @Column({type:'boolean',default:true})
    isActive:boolean;
}