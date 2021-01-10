import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Subject} from "./Subject";

@Entity()
export class Teacher {

    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column()
    firstName: string = '';

    @Column()
    lastName: string = '';


    @Column()
    age: number = 18;

    @Column("text")
    text: string = '';

    @ManyToMany(type => Subject)
    @JoinTable()
    subjects: Subject[] = [];

}