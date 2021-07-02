<template>
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
          {{
            new Date(book.released).toLocaleDateString("fr-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })
          }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "BooksTable",
  props: {
    books: {},
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
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
</style>