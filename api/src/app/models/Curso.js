import { Model, DataTypes } from 'sequelize';

class Curso extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'curso'
      }
    );

    return this;
  }
}

export default Curso;
