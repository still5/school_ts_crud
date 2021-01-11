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

export interface IClassroom {
    readonly id?: number
    classroomNumber: number
    bookingUrl: string
    
    getClassroom(id: number): object | void
    getClassrooms(): Promise<void | object[]>
    //getClassrooms(): object[] | void
    //updateClassroom(): object | string | void
    createClassroom(
        classroomNumber: number,
        bookingUrl: string
    ): Classroom
    // deleteClassroom(classroom: Classroom): void
}


@Entity('classrooms')
export class Classroom implements IClassroom {

    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column({name: 'classroom_number'})
    classroomNumber!: number;

    @Column({name: 'booking_url'})
    bookingUrl!: string;
	
    createClassroom(classroomNumber: number,
        bookingUrl: string
        //createdOn: Date
    ): Classroom
    {
        getConnection()
            .createQueryBuilder()
            .insert()
            .into(Entity)
            .values([
                { 
                    classroomNumber: classroomNumber,
                    bookingUrl: bookingUrl
                    //createdOn: createdOn
                }
            ])
    .execute();
        return new Classroom;
    }

    public getClassroom(id: number): object | void {
        async() => {const classroom1: any = await getConnection()
            .getRepository(Entity)
            .createQueryBuilder("classroom")
            .where("classroom.id = :id", { id: id })
            .getOne();
        console.log(classroom1);

        return classroom1;
        }
    }

    async getClassrooms(): Promise<void | object[]> {
        async() => { const classrooms: object[] | any = await getRepository(Entity)
        .createQueryBuilder("classrooms")
        .getMany();
        console.log(classrooms);

        return classrooms;
        }
    }

}