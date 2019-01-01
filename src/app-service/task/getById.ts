import { Task } from '../../domain/task';
import TaskRepository from '../../infrastructure/repository/task';

export default () => {
    const execute = async (key: string): Promise<Task> => {
        const task = await TaskRepository.getById(key);

        return task;
    };

    return execute;
};
