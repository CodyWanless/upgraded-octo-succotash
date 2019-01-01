import { Task } from './domain/task';
import { Priority } from './domain/task/priority';

const t = Task.create('flerp derp', 'flerp', Priority.Critical, new Date());
console.log(t.description
console.log(t);
