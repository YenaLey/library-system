import React, { useState } from 'react';

function App() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [id, setID] = useState(0);

  //대출
  const handleDeleteBook = async () => {
    const response = await fetch(`http://localhost:5000/api/books/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const book = await response.json();
      alert(`${book.title}을 대출하셨습니다.`);
    } else {
      alert('대출이 되지 않았습니다.');
    }
  };

  //반납
  const handleAddBook = async () => {
    const response = await fetch('http://localhost:5000/api/books/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, author, publishedDate }),
    });

    if (response.ok) {
      const book = await response.json();
      alert(`${book.title}을 반납하셨습니다.`);
    } else {
      alert('반납이 되지 않았습니다.');
    }
  };

  return (
    <div>
      <h1>Library Management</h1>
      <h2>Add Book</h2>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book Title" required />
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
      <input type="date" value={publishedDate} onChange={(e) => setPublishedDate(e.target.value)} />
      <input value={id} onChange={(e) => setID(e.target.value)} />
      <button onClick={handleDeleteBook}>대출하기</button>
      <button onClick={handleAddBook}>반납하기</button>
    </div>
  );
}

export default App;
