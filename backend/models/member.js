module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,  // 회원 이메일이 유니크해야 함
    },
  });

  Member.associate = function (models) {
    Member.hasMany(models.Loan, { foreignKey: 'memberId' });
  };

  return Member;
};