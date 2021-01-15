import {Entity, getConnection} from "typeorm";
import * as Classroom from "./entity/Classroom";

/*some copy-paste sample, needs rework
export class UserController {

    @Get("classrooms")
    getAll() {
        return getConnection().manager.find(Classroom);
    }

}*/

/*import { RequestHandler } from 'express';

import { Teacher } from './models';

const TODOS: Teacher[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as {text: string}).text;
  const newTodo = new Teacher(1, text);

  TODOS.push(newTodo);

  res.status(201).json({message: 'Created the todo.', createdTodo: newTodo});
};

/////
import pool from './db';
import { RequestHandler} from 'express';

class TodosController {

    public async get: RequestHandler = (req, res) => {
        try {
            const client = await pool.connect();

            const sql = "SELECT * FROM teachers";
            const { rows } = await client.query(sql);
            const todos = rows;

            client.release();

            res.send(todos);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

export default TodosController;
*/