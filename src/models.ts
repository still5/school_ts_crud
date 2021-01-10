//TS types, interfaces, enums, etc
type url = string | number | undefined
type teacher = object
type lesson = object
type classroom = object

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
interface ITeacher {
    readonly id: string
    firstName: string
    lastName: string
    age: number
	yearsOfxperience: number
    workedInUniversities?: boolean
    contacts: string
    createdOn: Date
	teacherExperience: {
		readonly id: number
        subject: Subjects
        isActive: boolean
	}
    
    getTeachers(): teacher[]
    updateTeacher(): teacher[] | string
    createTeacher(): teacher[] | string
    deleteTeacher(): string
    canTeachSubject(): teacher[]
    getTargetMathTeachers(): teacher[]
    getAllTeachers(): teacher[]
}

interface ILesson {
    readonly id: number
    lessonUrl: lesson
	classroomId: classroom
	subject: Subjects
	teacherId: teacher
	timeStart: Date
	timeEnd: Date

    getLessons(): lesson[]
    updateLesson(): lesson[] | string
    createLesson(): lesson[] | string
    deleteLesson(): string
}

interface IClassroom {
    readonly id: number | string
    classRoomNumber: number
    bookingUrl?: url

    getClassrooms(): classroom[]
    updateClassroom(): classroom[] | string
    createClassroom(): classroom[] | string
    deleteClassroom(): string
}