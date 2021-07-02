<template>
  <section>
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
      <tbody v-if="books.length > 0">
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
      v-if="fetchBooksError && !books.length"
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
      {{ fetchBooksError }}
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
  },
  methods: {
    getDashSeparatedDate,
  },
};
</script>

<style scoped>
table {
  margin: 28px 0 12px;
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
}

tr:nth-child(even) {
  background-color: var(--grayAlt);
}

.table-status {
  height: 300px;
}
</style>