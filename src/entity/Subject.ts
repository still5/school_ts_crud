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
    
    getSubjects(): any
    //updateSubject(): object | string | void
    createSubject(
        name: string
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

    createSubject(
        name: string
    ): Subject
    {
        getConnection()
            .createQueryBuilder()
            .insert()
            .into(Entity)
            .values([
                { 
                    name: name
                }
            ])
    .execute();
        return new Subject;
    }
    getSubjects(): any
    {
        async () => { const sqlQuery = await getConnection()
            .getRepository(Subject)
            .createQueryBuilder("subjects")
            .getMany();
            //.printSql()
            
            return sqlQuery;
        }
    }

}