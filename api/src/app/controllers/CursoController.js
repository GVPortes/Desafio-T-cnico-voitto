import Curso from '../models/Curso';

class CursoController {
  async index(req, res) {
    const cursos = await Curso.findAll();
    res.json(cursos);
  }

  async create(req, res) {
    try {
      const { name } = req.body;

      const emptyFields = CursoController.validateEmptyFields(
        ['name'],
        req.body
      );

      if (emptyFields.length > 0) {
        return res.status(400).send({
          error: `${emptyFields.join(', ')} é (são) campos obrigatórios`
        });
      }

      await Curso.create({
        nome: name
      });

      return res.json({}).status(201);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ error: 'Erro não tratado na API' });
    }
  }

  async read(req, res) {
    try {
      const curso = await Curso.findOne({
        raw: true,
        where: { id: req.params.id }
      });

      if (!curso) {
        return res
          .status(400)
          .send({ error: 'Curso não cadastrado no sistema' });
      }

      return res.json(curso).status(200);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ error: 'Erro não tratado na API' });
    }
  }

  async update(req, res) {
    try {
      const { name } = req.body;

      const curso = await Curso.findOne({
        raw: true,
        where: { id: req.params.id }
      });

      if (!curso) {
        return res
          .status(400)
          .send({ error: 'Curso não cadastrado no sistema' });
      }

      const newInformations = {
        nome: name
      };

      await Curso.update(newInformations, { where: { id: req.params.id } });

      return res.json(newInformations).status(200);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ error: 'Erro não tratado na API' });
    }
  }

  async delete(req, res) {
    try {
      const curso = await Curso.findOne({
        raw: true,
        where: { id: req.params.id }
      });

      if (!curso) {
        return res
          .status(400)
          .send({ error: 'Aluno não cadastrado no sistema' });
      }

      await Curso.destroy({ where: { id: req.params.id } });

      return res.json({}).status(204);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ error: 'Erro não tratado na API' });
    }
  }

  static validateEmptyFields(requiredFields, body) {
    const emptyFields = [];
    for (const field of requiredFields) {
      if (!body[field]) {
        emptyFields.push(field);
      }
    }

    return emptyFields;
  }
}

export default new CursoController();
