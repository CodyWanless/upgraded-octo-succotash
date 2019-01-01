import { Task } from '../../../domain/task';
import { InMemoryRepository } from '../in-mem-repo';

export default class InMemoryTaskRepository extends InMemoryRepository<Task> {
    protected getKey(item: Task): string {
        return item.id;
    }
}
