import { Router } from 'express';

import AlunosController from '../app/controllers/AlunoController';
import CursoController from '../app/controllers/CursoController';
import CursoAlunoController from '../app/controllers/CursoAlunoController';

const routes = new Router();

routes.get('/alunos', AlunosController.index);

routes.post('/alunos', AlunosController.create);
routes.get('/alunos/:id', AlunosController.read);
routes.put('/alunos/:id', AlunosController.update);
routes.delete('/alunos/:id', AlunosController.delete);
routes.get('/alunos/:id/cursos', CursoAlunoController.read);

routes.get('/cursos', CursoController.index);
routes.post('/cursos', CursoController.create);
routes.get('/cursos/:id', CursoController.read);
routes.put('/cursos/:id', CursoController.update);
routes.delete('/cursos/:id', CursoController.delete);
routes.get('/cursos/:id/alunos', CursoAlunoController.index);

routes.post('/cursos/:id_curso/alunos/:id_pessoa', CursoAlunoController.create);
routes.put('/cursos/:id_curso/alunos/:id_pessoa', CursoAlunoController.update);
routes.delete(
  '/cursos/:id_curso/alunos/:id_pessoa',
  CursoAlunoController.delete
);

export default routes;
