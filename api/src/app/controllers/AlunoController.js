import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }

  async create(req, res) {
    try {
      const { name, email, cep, city, state } = req.body;

      const emptyFields = AlunoController.validateEmptyFields(
        ['name', 'email', 'cep', 'city', 'state'],
        req.body
      );

      if (emptyFields.length > 0) {
        return res.status(400).send({ error: `${emptyFields.join(', ')} é (são) campos obrigatórios`});
      }

      await Aluno.create({
        nome: name,
        email: email,
        cep: cep,
        cidade: city,
        estado: state,
      });

      return res.json({}).status(201)
    } catch (error) {
      console.log(error)
      return res.status(500).send({ error: 'Erro não tratado na API'});
    }
  }

  async read(req, res) {
    try {
      const aluno = await Aluno.findOne({raw:true, where: {id: req.params.id} })

      if (!aluno) {
        return res.status(400).send({ error: 'Aluno não cadastrado no sistema'});
      }

      return res.json(aluno).status(200);
    } catch (error) {
      console.log(error)
      return res.status(500).send({ error: 'Erro não tratado na API'});
    }
  }

  async update(req, res) {
    try {
      const { name, email, cep, city, state } = req.body;

      const aluno = await Aluno.findOne({raw:true, where: {id: req.params.id} })

      if (!aluno) {
        return res.status(400).send({ error: 'Aluno não cadastrado no sistema'});
      }

      const newInformations = {
        nome: name,
        email: email,
        cep: cep,
        cidade: city,
        estado: state,
      }

      await Aluno.update(newInformations, {where: {id: req.params.id}});

      return res.json(newInformations).status(200);
    } catch (error) {
      console.log(error)
      return res.status(500).send({ error: 'Erro não tratado na API'});
    }
  }

  async delete(req, res) {
    try {
      const aluno = await Aluno.findOne({raw:true, where: {id: req.params.id} })

      if (!aluno) {
        return res.status(400).send({ error: 'Aluno não cadastrado no sistema'});
      }

      await Aluno.destroy({where: {id: req.params.id}})

      return res.json({}).status(204);
    } catch (error) {
      console.log(error)
      return res.status(500).send({ error: 'Erro não tratado na API'});
    }
  }

  static validateEmptyFields(requiredFields, body) {
    const emptyFields = []
    for (const field of requiredFields) {
      if (!body[field]) {
        emptyFields.push(field)
      }
    }

    return emptyFields;
  }
}

export default new AlunoController();
