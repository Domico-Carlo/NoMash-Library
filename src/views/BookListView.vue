<template>
  <div>
    <h1>Books with ISBN > 1000</h1>
    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.name }} - ISBN: {{ book.isbn }}
        <button @click="updateBook(book.id)">Update</button>
        <button @click="deleteBook(book.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import db from '../firebase/init.js';
import { collection, query, where, orderBy, limit, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

export default {
  setup() {
    const books = ref([]);

    const fetchBooks = async () => {
      try {
        const q = query(collection(db, 'books'), where('isbn', '>', 1000), orderBy('isbn', 'desc'), limit(2));
        const querySnapshot = await getDocs(q);
        const booksArray = [];
        querySnapshot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data() });
        });
        books.value = booksArray;
      } catch (error) {
        console.error('Error fetching books: ', error);
      }
    };

    const updateBook = async (id) => {
      const newName = prompt('Enter new book name:');
      if (newName) {
        await updateDoc(doc(db, 'books', id), { name: newName });
        fetchBooks();
      }
    };

    const deleteBook = async (id) => {
      await deleteDoc(doc(db, 'books', id));
      fetchBooks();
    };

    onMounted(() => {
      fetchBooks();
    });

    return {
      books,
      updateBook,
      deleteBook
    };
  }
}
</script>