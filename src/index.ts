import { Task } from './domain/task';

const t = Task.create('flerp derp', 'flerp', 1, new Date());
console.log(t.description);
console.log(t);
