<template>
  <section class="w-full table-wrp">
    <table class="w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>ISBN</th>
          <th>AUTHORS</th>
          <th>PAGES</th>
          <th>COUNTRY</th>
          <th>RELEASED</th>
        </tr>
      </thead>
      <tbody v-if="!booksLoading && books.length > 0">
        <tr v-for="book in books" :key="book.isbn">
          <td>{{ book.name }}</td>
          <td>{{ book.isbn }}</td>
          <td>{{ book.authors.join(", ") }}</td>
          <td>{{ book.numberOfPages }}</td>
          <td>{{ book.country }}</td>
          <td>
            {{ getDashSeparatedDate(book.released) }}
          </td>
        </tr>
      </tbody>
    </table>
    <div
      v-if="fetchBooksError || booksLoading"
      class="
        table-status
        error-txt
        w-full
        flex
        items-center
        justify-center
        text-center
      "
    >
      <p v-if="!booksLoading && fetchBooksError">{{ fetchBooksError }}</p>
      <div v-if="booksLoading && !fetchBooksError" class="fit-content">
        <div class="loader-tube"><div class="loader"></div></div>
      </div>
    </div>
    <div
      v-if="!booksLoading && !fetchBooksError && !books.length"
      class="
        table-status
        w-full
        flex
        items-center
        justify-center
        gray-text
        text-center
      "
    >
      {{ "Sorry, no results found!" }}
    </div>
  </section>
</template>

<script>
import { getDashSeparatedDate } from "../../utils/date";
export default {
  name: "BooksTable",
  props: {
    books: {
      type: Array,
      required: true,
    },
    fetchBooksError: {
      type: String,
      required: true,
    },
    booksLoading: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    getDashSeparatedDate,
  },
};
</script>

<style scoped>
table {
  margin: 28px 0 16px;
  border-collapse: collapse;
}

table,
th,
td {
  border: thin solid var(--lightGray);
}

td,
th {
  padding: 16px 10px;
  text-align: left;
  color: var(--primaryText);
}

tr:nth-child(even) {
  background-color: var(--grayAlt);
}

.table-status {
  height: 300px;
}

.table-wrp {
  overflow-x: auto;
}
</style>