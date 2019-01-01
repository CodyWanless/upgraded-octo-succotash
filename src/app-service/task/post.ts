import { Task } from '../../domain/task';

export default () => {
    const execute = (body: any) => Promise
        .resolve()
        .then(() => {
            const task = Task.create(body.title, body.description, body.priority, body.dueDate);
            return Promise.resolve();
        })
        .catch((e) => { throw new Error(e); });

    return execute;
};
