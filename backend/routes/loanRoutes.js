const express = require('express');
const router = express.Router();
const { Loan, Book, Member } = require('../models');

router.post('/', async (req, res) => {
  try {
    const { bookId, memberId, loanDate } = req.body;
    
    const book = await Book.findByPk(bookId);
    const member = await Member.findByPk(memberId);
    
    if (!book) return res.status(404).json({ message: 'Book not found' });
    if (!member) return res.status(404).json({ message: 'Member not found' });

    const loan = await Loan.create({ bookId, memberId, loanDate });
    res.status(201).json(loan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/return/:id', async (req, res) => {
  try {
    const loan = await Loan.findByPk(req.params.id);
    if (!loan) return res.status(404).json({ message: 'Loan not found' });

    loan.returnDate = new Date();
    await loan.save();
    res.json(loan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
