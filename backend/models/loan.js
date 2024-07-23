module.exports = (sequelize, DataTypes) => {
  const Loan = sequelize.define('Loan', {
    bookId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Books',
        key: 'id',
      },
    },
    memberId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Members',
        key: 'id',
      },
    },
    loanDate: DataTypes.DATE,
    returnDate: DataTypes.DATE,
  });

  Loan.associate = function (models) {
    Loan.belongsTo(models.Book, { foreignKey: 'bookId' });
    Loan.belongsTo(models.Member, { foreignKey: 'memberId' });
  };

  return Loan;
};