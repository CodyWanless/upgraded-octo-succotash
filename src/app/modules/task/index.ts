import { Router } from 'express';
import { getAll, getById, post } from '../../../app-service/task';

export default () => {
    const router = Router();

    const postUseCase = post();
    const getByIdUseCase = getById();
    const getAllUseCase = getAll();

    router.get('/:id', async (req, res) => {
        try {
            const foundTask = await getByIdUseCase(req.params.id);
            res.status(200).json(foundTask);
        } catch (err) {
            res.status(404).json(err.message);
        }
    });

    router.get('/', async (req, res) => {
        try {
            const tasks = await getAllUseCase();

            res.status(200).json(tasks);
        } catch (err) {
            res.status(400).json(err.message);
        }
    });

    router.post('/', async (req, res) => {
        try {
            const data = await postUseCase(req.body);
            res.status(201).json(data);
        } catch (err) {
            res.status(400).json(err.message);
        }
    });

    return router;
};
