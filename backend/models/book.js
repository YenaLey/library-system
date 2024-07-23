module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING,
      unique: true,  // 책 제목이 유니크해야 함
      allowNull: false,
    },
    author: DataTypes.STRING,
    publishedDate: DataTypes.DATE,
  });

  Book.associate = function (models) {
    Book.hasMany(models.Loan, { foreignKey: 'bookId' });
  };

  return Book;
};