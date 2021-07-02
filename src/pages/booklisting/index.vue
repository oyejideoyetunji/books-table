<template>
  <div>
    <section class="flex justify-end">
      <div class="search-wrp w-full flex items-center justify-end">
        <span>Search: </span>
        <input
          class="input w-full"
          type="text"
          v-model="filterValue"
          v-on:keyup="setBooksData"
        />
      </div>
    </section>
    <BooksTable :books="books" />
    <section
      v-if="books.length && pages"
      class="w-ful flex items-center justify-between"
    >
      <span>Showing entries</span>
      <div class="pagin-wrp w-50 flex items-center justify-end">
        <span
          v-for="(page, i) in pages"
          :key="i"
          class="pagin-box flex items-center justify-center"
          :class="{'primary-content': activePageTab === i}"
          v-on:click="() => handlePaginationClick(page.number, i)"
        >
          {{ page.label }}
        </span>
      </div>
    </section>
  </div>
</template>

<script>
import BooksTable from "../../components/booksTable";
import { fetchBooks } from "../../services/books";
import { urlStringParser } from "../../utils/string";
export default {
  name: "BookListing",
  components: {
    BooksTable,
  },
  data() {
    return {
      activePageTab: 0,
      filterValue: "",
      currentPage: 1,
      pages: [],
      books: [],
      fetchBooksError: "",
    };
  },
  mounted() {
    this.setBooksData();
  },
  methods: {
    async setBooksData() {
      const response = await fetchBooks(
        this.currentPage,
        urlStringParser(this.filterValue)
      );
      if (response?.status === 200 && response?.data) {
        this.books = response.data;
        try {
          this.pages = response.headers.link
            .split(",")
            .map((link) => {
              const linkParts = link.split(";");
              return {
                url: linkParts[0].slice(1, linkParts[0].length - 1),
                label: linkParts[1].slice(6, linkParts[1].length - 1),
                number: link.match(/=[\d+]&/)[0].slice(1, 2),
              };
            })
            .sort((linkA, linkB) => linkA.number - linkB.number);
        } catch (error) {
          this.pages = [];
        }
      }
    },

    handlePaginationClick(page, index) {
      this.activePageTab = index
      this.currentPage = page;
      this.setBooksData();
    },
  },
};
</script>

<style scoped>
@media only screen and (min-width: 767px) {
  .search-wrp {
    width: 50%;
  }
}

@media only screen and (min-width: 1024px) {
  .search-wrp {
    width: 30%;
  }
}

.pagin-box {
  height: 30px;
  padding: 14px;
  border: thin solid var(--grayAlt);
  cursor: pointer;
}
</style>