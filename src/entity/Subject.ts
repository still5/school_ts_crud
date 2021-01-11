import {
    Column, 
    Entity, 
    JoinTable,
    CreateDateColumn,
    PrimaryGeneratedColumn, 
    getConnection,
    BaseEntity,
    JoinColumn,
    ManyToOne,
    ManyToMany,
    OneToMany
  } from 'typeorm';

enum Subjects {
    Math = 'Math',
    Biology = 'Biology',
    Physics = 'Physics',
    Chemistry = 'Chemistry',
    Philosophy = 'Philosophy',
    Arts = 'Arts',
    History = 'History'
}

export interface ISubject {
    readonly id?: number
    name: string
    createdOn: string
    
    //getSubjects(): object[] | string | void
    //updateSubject(): object | string | void
    createSubject(
        name: string
        //createdOn: Date
    ): Subject
    // deleteSubject(subject: Subject): void
}

@Entity('subjects')
export class Subject implements ISubject {

    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column({ type: "enum", enum: Subjects })
    name!: Subjects;

//    @Column({name: 'name'})
//    name!: string;

    @CreateDateColumn({
        name: 'created_on',
        type: 'timestamp'
    })
    createdOn!: string;

    // @ManyToMany(() => Subject, Teacher => subjects.teachers, {
    //     cascade: true
    // })
    // @JoinTable()
    // teachers!: Teacher[];

    createSubject(
        name: string
        //createdOn: Date
    ): Subject
    {
        /*getConnection()
            .createQueryBuilder()
            .insert()
            .into(Entity)
            .values([
                { 
                    name: name
                    //createdOn: createdOn
                }
            ])
    .execute();*/
        return new Subject;
    }

}