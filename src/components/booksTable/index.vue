<template>
  <section class="w-full table-wrp">
    <table class="w-full">
      <caption class="text-left">Westeros Books</caption>
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
      <tbody v-if="!booksLoading && !fetchBooksError && !!books.length">
        <table-row v-for="book in books" :key="book.isbn" :book="book" />
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
import tableRow from "../../components/tableRow"
export default {
  name: "BooksTable",
  components: {
      tableRow
  },
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
};
</script>

<style scoped>
table {
  margin: 28px 0 16px;
  border-collapse: collapse;
}

caption {
    padding: 12px 0;
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