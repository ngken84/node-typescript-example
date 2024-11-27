import { RequestHandler } from "express";
import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
    const text = (req.body as {text: string}).text;
    const newTodo = new Todo("todo" + Date.now(), text);
    
    TODOS.push(newTodo);

    res.status(201).json({message: 'Created the todo.', createdTodo: newTodo})
};

export const getTodos: RequestHandler = (req, res, next) => {
    res.status(200).json(TODOS);
}

export const patchTodo: RequestHandler<{id: string}> = (req, res, next) => {
    const id = req.params.id;
    const {text} = (req.body as {text: string});
    const todoIndex = TODOS.findIndex(todo => todo.id === id);
    if(todoIndex === -1) {
        res.status(404).json({message: 'Unable to find corresponding todo item'});
    } else {
        TODOS[todoIndex].text = text;
        res.status(201).json({message: 'Todo updated successfully.', updatedTodo: TODOS[todoIndex]})  
    }
}

export const deleteTodo: RequestHandler<{id: string}> = (req, res, next) => {
    const id = req.params.id;
    const todoIndex = TODOS.findIndex(todo => todo.id === id);
    if(todoIndex === -1) {
        res.status(404).json({message: 'Unable to find corresponding todo item'});
    } else {
        TODOS.splice(todoIndex, 1);
        res.status(201).json({message: 'Todo deleted successfully.', newTodos: TODOS})  
    }
}

