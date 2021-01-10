import "reflect-metadata";
import {createConnection} from "typeorm";
import {Teacher} from "./entity/Teacher";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const teacher = new Teacher();
    teacher.firstName = "Timber";
    teacher.lastName = "Saw";
    teacher.age = 25;
    await connection.manager.save(teacher);
    console.log("Saved a new user with id: " + teacher.id);

    console.log("Loading users from the database...");
    const teachers = await connection.manager.find(Teacher);
    console.log("Loaded users: ", teachers);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
