import { Task } from '../../domain/task';
import TaskRepository from '../../infrastructure/repository/task';

export default () => {
    const execute = (): Promise<Task[]> => {
        return TaskRepository.getAll();
    };

    return execute;
};
