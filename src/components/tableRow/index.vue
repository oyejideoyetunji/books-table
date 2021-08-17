<template>
  <tr>
    <td>{{ book.name }}</td>
    <td>{{ book.isbn }}</td>
    <td>{{ book.authors.join(", ") }}</td>
    <td>{{ book.numberOfPages }}</td>
    <td>{{ book.country }}</td>
    <td>
      {{ getDashSeparatedDate(book.released) }}
    </td>
  </tr>
</template>

<script>
import { getDashSeparatedDate } from "../../utils/date";
export default {
  name: "table-row",
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getDashSeparatedDate,
  },
};
</script>

<style scoped>
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
</style>