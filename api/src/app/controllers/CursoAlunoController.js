import CursoAluno from '../models/CursoAluno';

class CursoAlunoController {
  async index(req, res) {
    const relations = await CursoAluno.findAll({
      where: { id_curso: req.params.id }
    });
    res.json(relations);
  }

  async create(req, res) {
    try {
      const { id_curso, id_pessoa } = req.params;

      await CursoAluno.create({
        id_pessoa,
        id_curso
      });

      return res.json({}).status(201);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ error: 'Erro não tratado na API' });
    }
  }

  async read(req, res) {
    //Obter os cursos de um aluno
    try {
      const cursos = await CursoAluno.findAll({
        where: { id_pessoa: req.params.id }
      });

      if (cursos.length === 0) {
        return res.send('Nenhum curso cadastrado para esse aluno');
      }

      return res.json(cursos);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ error: 'Erro não tratado na API' });
    }
  }

  async update(req, res) {
    try {
      const { id_curso, id_pessoa } = req.params;
      const { id_curso: new_id_curso, id_pessoa: new_id_pessoa } = req.body;

      const curso = await CursoAluno.findOne({
        raw: true,
        where: { id_pessoa, id_curso }
      });

      if (!curso) {
        return res.send('Nenhum curso cadastrado para esse aluno');
      }

      const newInformations = {
        id_pessoa: new_id_pessoa || id_pessoa,
        id_curso: new_id_curso || id_curso
      };

      await CursoAluno.update(newInformations, {
        where: { id_pessoa, id_curso }
      });

      return res.json(newInformations).status(200);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ error: 'Erro não tratado na API' });
    }
  }

  async delete(req, res) {
    try {
      const { id_curso, id_pessoa } = req.params;

      const curso = await CursoAluno.findOne({
        raw: true,
        where: { id_pessoa, id_curso }
      });

      if (!curso) {
        return res.send('Nenhum curso cadastrado para esse aluno');
      }

      await CursoAluno.destroy({ where: { id_pessoa, id_curso } });

      return res.json({}).status(204);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ error: 'Erro não tratado na API' });
    }
  }
}

export default new CursoAlunoController();
