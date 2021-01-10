import {Column, PrimaryGeneratedColumn, Entity} from "typeorm";

@Entity()
export class Subject {

    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column()
    name: string = '';

}