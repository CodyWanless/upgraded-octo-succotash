import { Task } from '../../../domain/task';
import InMemoryTaskRepository from './in-mem-task-repo';

export default class TaskRepository {
    private repo: InMemoryTaskRepository;

    constructor() {
        this.repo = new InMemoryTaskRepository();
    }

    public add(task: Task): Promise<void> {
        this.repo.add(task);
        return Promise.resolve();
    }

    public update(task: Task): Promise<void> {
        this.repo.update(task);
        return Promise.resolve();
    }

    public delete(task: Task): Promise<void> {
        this.repo.delete(task.id);
        return Promise.resolve();
    }

    public getById(id: string): Promise<Task> {
        const task = this.repo.get(id);
        if (task) {
            return Promise.resolve(task);
        }

        throw new Error('Task not found');
    }
}
