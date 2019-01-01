import { Task } from '../../domain/task';
import TaskRepository from '../../infrastructure/repository/task';

export default () => {
    const execute = async (body: any): Promise<Task> => {
        const task = Task.create(body.title,
            body.description,
            body.priority,
            body.dueDate);

        await TaskRepository.add(task);

        return task;
    };

    return execute;
};
