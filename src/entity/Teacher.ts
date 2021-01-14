import {
    Column, 
    Entity, 
    JoinTable,
    CreateDateColumn,
    PrimaryGeneratedColumn, 
    getConnection,
    getRepository,
    BaseEntity,
    JoinColumn,
    ManyToOne,
    ManyToMany,
    OneToMany
  } from 'typeorm';
import {Classroom} from './Classroom'
import {Subject} from './Subject'

export interface ITeacher {
    readonly id?: number
    firstName: string
    lastName: string
    age: number
	yearsOfxperience: number
    workedInUniversities: boolean
    createdOn: string
	//teacherExperience?: {
		//readonly id?: number
        //subject: object
        //isActive: boolean
	//}
    
    getTeacher(id: number): object | void
    //updateTeacher(): object | string | void
    createTeacher(
        firstName: string,
        lastName: string,
        age: number,
        yearsOfxperience: number,
        //createdOn: Date,
        workedInUniversities: boolean
    ): Teacher
    // deleteTeacher(teacher: Teacher): void
    // canTeachSubject(subject: Subject): boolean
    getTargetMathTeachers(): Promise<void | object[]>
    getAllTeachers(): Promise<void | object[]>
}


@Entity('teachers')
export class Teacher implements ITeacher {

    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column({name: 'first_name'})
    firstName!: string;

    @Column({name: 'last_name'})
    lastName!: string;

    @Column({name: 'age'})
    age!: number;

    @Column({name: 'years_of_experience'})
    yearsOfxperience!: number;

    @Column({name: 'worked_in_universities'})
    workedInUniversities!: boolean;

    @CreateDateColumn({
        name: 'created_on',
        type: 'timestamp'
    })
    createdOn!: string;

    // @ManyToMany(() => Subject, Teacher => teachers.subjects, {
    //     cascade: true
    // })
    // @JoinTable()
    // subjects!: Subject[];

    createTeacher(firstName: string,
        lastName: string,
        age: number,
        yearsOfxperience: number,
        //createdOn: Date,
        workedInUniversities: boolean
    ): Teacher
    {
        getConnection()
            .createQueryBuilder()
            .insert()
            .into(Entity)
            .values([
                { 
                    firstName: firstName,
                    lastName: lastName,
                    age: age,
                    yearsOfxperience: yearsOfxperience,
                    //createdOn: createdOn,
                    workedInUniversities: workedInUniversities
                }
            ])
    .execute();
        return new Teacher;
    };

    getTeacher(id: number): object | void {
        async() => {const teacher1: any = await getConnection()
            .getRepository(Entity)
            .createQueryBuilder("user")
            .where("user.id = :id", { id: id })
            .getOne();

        return teacher1;
        }
    }

    /*class classroomController {

        @Get("/users")
        getAll() {
            return getConnection().manager.find(User);
        }
    
    }*/

    async getAllTeachers(): Promise<void | object[]> {
        async() => { const teachers: object[] | any = await getRepository(Entity)
        .createQueryBuilder("teachers")
        .getMany();

        return teachers;
        }
    }

    async getTargetMathTeachers(): Promise<void | object[]> {
        async() => { const teachers: object[] | any = await getRepository(Teacher)
            .createQueryBuilder("teachers")
            .innerJoin("teachers.lessons", "lessons")
            .innerJoinAndSelect("lessons.classrooms", "classrooms", "classrooms.number = :crNum", { crNum: 100 })
            .where("teachers.years_of_experience > :years", { years: 10 })
            //.addSelect("EXTRACT (isodow from ls.time_start) = :wednesday", { wednesday: 4}) //needed SQL syntax: AND select extract (isodow from ls.time_start) from teachers=4 
            .andWhere(qb => {
                const subQuery: string = qb.subQuery()
                    .select("subjects.id")
                    .from(Subject, "subjects")
                    .where("subjects.name = :math", {math: "Math"})
                    .getQuery();
                return "te.subjectId IN " + subQuery;
            })
            .andWhere("user.name = :name", { name: "Timber" })
            .printSql()
            .getMany();
    
            return teachers;
            }
    }
}
