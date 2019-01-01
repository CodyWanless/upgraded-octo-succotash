import uuidv1 from 'uuid';
import { Priority } from './priority';

export default class Task {
    public static create(title: string,
        description: string,
        priority: Priority,
        dueDate: Date): Task {
        return new Task(uuidv1(), title, description, priority, dueDate);
    }

    public static rehydrate(id: string,
        title: string,
        description: string,
        priority: Priority,
        dueDate: Date): Task {
        return new Task(id, title, description, priority, dueDate);
    }

    public readonly id: string;
    private _title: string;
    private _description: string;
    private _priority: Priority;
    private _dueDate: Date | null;

    private constructor(id: string,
        title: string,
        description: string,
        priority: Priority,
        dueDate: Date) {
        this.id = id;
        this._title = title;
        this._description = description;
        this._priority = priority;
        this._dueDate = dueDate;
    }

    get title(): string {
        return this._title;
    }

    get description(): string {
        return this._description;
    }

    get priority(): Priority {
        return this._priority;
    }

    get dueDate(): Date | null {
        return this._dueDate;
    }
}
