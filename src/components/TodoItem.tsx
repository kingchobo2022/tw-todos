import type { Todo } from "../types/todos"

interface TodoItemProps {
    todo: Todo;
}


export default function TodoItem({todo}: TodoItemProps) {
    return (
        <div>
            <label className="flex items-center gap-2 border border-gray-400 rounded-m p-2 bg-white hover:bg-slate-500">
                <input type="checkbox" className="scale-125" />
                <span className={todo.completed ? "line-through text-gray-400" : ""}>{todo.title}</span>
            </label>
        </div>
    )
}