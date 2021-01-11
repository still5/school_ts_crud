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
    // getTargetMathTeachers(): object[]
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
        /*getConnection()
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
    .execute();*/
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
        async() => { const users: object[] | any = await getRepository(Entity)
        .createQueryBuilder("user")
        .getMany();

        return users;
        }
    }

}
