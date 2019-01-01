import bodyParser from 'body-parser';
import { Router } from 'express';
import IndexController from './modules';
import TaskController from './modules/task';

export default () => {
    const router = Router();

    router.use(bodyParser.json());
    router.use('/', IndexController());
    router.use('/tasks', TaskController());

    return router;
};
