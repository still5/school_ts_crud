//TS types, interfaces, enums, etc
import * as consts from './const'

type url = string | number | undefined
enum Subjects {
    Math,
    Biology,
    Physics,
    Chemistry,
    Philosophy,
    Arts,
    History
}

//interfaces


interface ILesson {
    readonly id: number
    lessonUrl: object
	classroomId: object
	subject: Subjects
	teacherId: number
	timeStart: Date
	timeEnd: Date

    getLessons(): object[]
    updateLesson(): object[] | string
    createLesson(): object[] | string
    deleteLesson(): string
}

interface IClassroom {
    readonly id: number | string
    classRoomNumber: number
    bookingUrl?: url

    getClassrooms(): object[]
    updateClassroom(): object[] | string
    createClassroom(): object[] | string
    deleteClassroom(): string
}

/*export class Teacher implements ITeacher{
    firstName: string;
    lastName: string;
    age: number
	yearsOfxperience: number
    workedInUniversities?: boolean
    contacts: string
    createdOn: Date
	//teacherExperience: {
		//readonly id?: number
        //subject: Subjects
        //isActive: boolean
    //};
    
    constructor (
        firstName: string, 
        lastName: string, 
        birthYear: number, 
        experienceStart: number, 
        workedInUniv: boolean, 
        contacts: string, 
        ) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = 2021 - birthYear; //consts.currentDate - birthYear;
            this.yearsOfxperience = 2021 -  - experienceStart;//consts.currentDate - experienceStart;
            this.workedInUniversities = workedInUniv;
            this.contacts = contacts;
            this.createdOn = new Date();
    }

    getTeachers(): object[] | string | void {}
    updateTeacher(): object | string | void {}
    createTeacher(): object | string | void {}
    deleteTeacher(): string | void {}
    canTeachSubject(): object[] | string {
        let teachersThatCanTeachSubject = 
        return teacher[];
        if (length(teacher[])=0) {
            return 'No teachers found';
        }
    }
    getTargetMathTeachers(): teacher[] {}
    getAllTeachers(): teacher[] {
        return this.teacher[];
    }

}
*/