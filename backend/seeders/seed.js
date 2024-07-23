const { sequelize, Book, Member, Loan } = require('../models');

const initializeDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    const books = [
      { title: '1984', author: 'George Orwell', publishedDate: new Date('1949-06-08') },
      { title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedDate: new Date('1960-07-11') },
      { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedDate: new Date('1925-04-10') }
    ];

    const members = [
      { name: 'John Doe', email: 'john@example.com' },
      { name: 'Jane Smith', email: 'jane@example.com' }
    ];

    await Book.bulkCreate(books);
    await Member.bulkCreate(members);

    console.log('Database initialized and seeded');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

initializeDatabase();

//초기화 명령어
//npm run seed