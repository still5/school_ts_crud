//can have full API routing for CRUD (will be plus) 
//OR in simplified version can only call getAllTeachers + getTargetMathTeachers and log output of both
import express, { Request, Response, NextFunction, RequestParamHandler } from 'express';
import dotenv from 'dotenv';
import dbConnect from './db';
import * as consts from './const';
import {Teacher} from './entity/Teacher'
import {Classroom} from './entity/Classroom'
import {Subject} from './entity/Subject'
import {getConnection, getRepository, createQueryBuilder} from "typeorm"
import path from 'path';

const env = dotenv.config({path: '.env'});
const portToListen = parseInt(process.env.NODE_PORT || '8081');
const app = express();

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log({ message: err.message });
});

app.listen(portToListen, async () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${portToListen}`);
    await dbConnect();
    let teacher = new Teacher;
    teacher.getTargetMathTeachers();
});


//ROUTERS:
app.get('/getTeacher/:id', (req: Request, res: Response) => {
    //must be req.query parsing function to get filtering parameters and build SQL query
    //res.send('getTeacher');
    let teacher = new Teacher();  //seems wrong, huh?
    console.log(JSON.stringify(teacher.getTeacher(parseInt(req.params.id))));
});

//WOW, it works
app.get('/createTeacher', (req: Request, res: Response) => {
    let teacher = new Teacher();
    const currentDate: string = String(new Date());
    teacher.createTeacher('Svitlana','Kulzhenko', 42, 22, currentDate, true);
}
);

app.get('/updateTeacher/:id', (req: Request, res: Response) => {
    //res.send('updateTeacher');
});

app.get('/deleteTeacher/:id', (req: Request, res: Response) => {
    //res.send('deleteTeacher');
});

app.get('/canTeachSubject/:subjectName', (req: Request, res: Response) => {
    //res.send('canTeachSubject');
});

app.get('/getallteachers', (req: Request, res: Response) => {
    console.log('All teachers');
    let teacher = new Teacher();
    teacher.getAllTeachers();
    res.send('All teachers');
});

app.get('/getTargetMathTeachers', (req: Request, res: Response) => {
    //res.send('getTargetMathTeachers');
});

//CLASSROOMS
app.get('/getClassrooms', (req: Request, res: Response) => {
    const allClassroomsList = async (req: Request, res: Response, next: NextFunction) => {
        try {
          const classrooms: Classroom[] = await getConnection()
          .getRepository(Classroom)
          .createQueryBuilder("classrooms")
          .getMany();
          console.log(classrooms);
          res.status(200).json(classrooms);
        } catch (err) {
          next(err);
        }
        return allClassroomsList;
      };
    });
    

app.get('/getClassrooms/:number', (req: Request, res: Response) => {
    const sql = getRepository(Classroom)
        .createQueryBuilder("classrooms")
        .where("classrooms.classroom_number = :num", { num: req.params.number })
        .getSql();
        console.log(sql);
    });

app.get('/createClassroom');
app.get('/updateClassroom/:id');
app.get('/deleteClassroom/:id');

//SUBJECTS
app.get('/getSubjects');
app.get('/getSubjects/:name');
app.get('/createSubject');
app.get('/updateSubject/:id');
app.get('/deleteSubject/:id');

//LESSONS
app.get('/getLessons', (req: Request, res: Response) => {
    //must be complex filtering
});
app.get('/createSubject');
app.get('/updateSubject/:id');
app.get('/deleteSubject/:id');

//ALL OTHER => 404
app.get('*',function (req, res) {
    res.sendFile(path.join(__dirname + '/../views/404.html'))
});
