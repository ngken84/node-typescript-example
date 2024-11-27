# Node JS Express Typescript Example

## Project Goal

An example Express Node JS application using Typescript according to "Understanding Typescript"

## Takeaways
- Use @types to help with Typescript compilation and autocomplete etc.
```
"devDependencies": {
  "@types/express": "^5.0.0",
  "@types/node": "^22.10.0",
  "nodemon": "^3.1.7"
}
```
- Casting bodies of requests to help with auto completion. You can at least typecast what types will be for later.
```
const {text} = (req.body as {text: string});
```
- Casting parameters of handlers to help with auto completion
```
export const patchTodo: RequestHandler<{id: string}> = (req, res, next) => {
```
- Use findIndex more!
```
const todoIndex = TODOS.findIndex(todo => todo.id === id);
```
