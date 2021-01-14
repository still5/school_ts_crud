//can have full API routing for CRUD (will be plus) 
//OR in simplified version can only call getAllTeachers + getTargetMathTeachers and log output of both
import express, { Request, Response, NextFunction, RequestParamHandler } from 'express';
import dotenv from 'dotenv';
import dbConnect from './db';
import todoRoutes  from './router';
import * as consts from './const';
import {Teacher} from './entity/Teacher'
import {Classroom} from './entity/Classroom'
import {getConnection, getRepository} from "typeorm"
import path from 'path';
//import {env} from './config';

const env = dotenv.config({path: '.env'});
const portToListen = parseInt(process.env.NODE_PORT || '8081');
const app = express();

app.use('/todos', todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log({ message: err.message });
});

app.listen(portToListen, async () => {
    console.log(`Current year is: ${String(consts.currentYear)}`);
    console.log(`⚡️[server]: Server is running at https://localhost:${portToListen}`);
    await dbConnect();
    //createConnection();
});

//ROUTERS:
app.get('/something', (req: Request, res: Response) => {
    console.log('Lets obtain URL query parameters::');
    let requesturl: object = req.query;
    console.log(requesturl);
    let output: string = '';
    if (req.query.id) {
        output = 'id is in the query: '+JSON.stringify(req.query.id);
    }
    output = output+'<br>Express + TypeScript Server; url params: '+JSON.stringify(requesturl);
    res.send(output);
});

app.get('/getallteachers', (req: Request, res: Response) => {
    console.log('All teachers');
    teacher.getAllTeachers();
    res.send('All teachers');
});

/*const showAllClassrooms = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const groceries: Classroom[] = await Classroom
      .createQueryBuilder("classrooms")
      .getMany();
      res.status(200).json(groceries);
    } catch (err) {
      next(err);
    }
  };
*/
app.get('/getAllClassrooms', (req: Request, res: Response) => {
    console.log('address: getAllClassrooms');
    // (async () => {
    //    await dbConnect();
    //   })();
      
      
      let classroom = new Classroom();
      classroom.getClassrooms();
})


app.get('*',function (req, res) {
    //res.send('Unknown address, try again');
    res.sendFile(path.join(__dirname + '/../views/404.html'))
    /*console.log('!!==404==!!');
    res.status(404);
    if (req.accepts('html')) {
        res.render('404', { url: req.url });
        return;
    }

    // default to plain-text. send()
    res.type('txt').send('Not found');
    */
    //RESULT at the moment: error 'No default engine was specified and no extension was provided.
});

function parseQueryString(queryString?: any): any {
    // if the query string is NULL or undefined
    if (!queryString) {
        console.log('ParseQuery started');

        const params: any = {};

        const queries = queryString.split("&");

        queries.forEach((indexQuery: string) => {
            const indexPair = indexQuery.split("=");

            const queryKey = decodeURIComponent(indexPair[0]);
            const queryValue = decodeURIComponent(indexPair.length > 1 ? indexPair[1] : "");

            params[queryKey] = queryValue;
        });

        console.log(params);
    }
}

// (async () => {
//   await dbConnect();
// })();

//getClassroom(1)
//dbConnect();

let teacher = new Teacher();
/*getConnection().
        getRepository(Teacher)
            .insert([
                { 
                    firstName: 'Svitlana',
                    lastName: 'Samarenko',
                    age: 42,
                    yearsOfxperience: 22,
                    //createdOn: createdOn,
                    workedInUniversities: true
                }
            ]);*/
teacher.createTeacher('Svitlana','Samarenko', 42, 22, true);

teacher.getTargetMathTeachers();