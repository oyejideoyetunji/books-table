<template>
  <div class="w-full">
    <section class="w-full flex items-center justify-end">
      <span>Search: </span>
      <input
        class="input w-full search-inp"
        type="text"
        v-model="filterValue"
      />
    </section>
    <BooksTable
      :booksLoading="booksLoading"
      :fetchBooksError="fetchBooksError"
      :books="books"
    />
    <section
      v-if="!booksLoading && books.length && pages.length"
      class="table-legend w-ful flex flex-col"
    >
      <span
        >Showing entries
        {{ `${currentPageRange.start} to ${currentPageRange.end}` }}</span
      >
      <div class="pagin-wrp flex items-center">
        <span
          v-for="(page, i) in pages"
          :key="i"
          class="pagin-box flex items-center justify-center"
          :class="{ 'primary-content': activePageTab === i }"
          @click="() => handlePaginationClick(page.number, i)"
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
      booksLoading: false,
    };
  },
  computed: {
    currentPageRange() {
      const pageSize = 10;
      return {
        start: 1 + (this.currentPage - 1) * pageSize,
        end: (this.currentPage - 1) * pageSize + this.books.length,
      };
    },
  },
  mounted() {
    this.setBooksData();
  },
  watch: {
    filterValue: function () {
      this.setBooksData();
    },
  },
  methods: {
    async setBooksData() {
      this.fetchBooksError = "";
      this.booksLoading = true;
      const response = await fetchBooks(
        this.currentPage,
        urlStringParser(this.filterValue)
      );
      if (response?.status === 200 && response?.data) {
        this.books = response.data;
        this.booksLoading = false;
        try {
          this.pages = response.headers.link
            .split(",")
            .map((link) => {
              const linkParts = link.split(";");
              return {
                url: linkParts[0].slice(1, linkParts[0].length - 1),
                label: linkParts[1].slice(6, linkParts[1].length - 1),
                number: Number(link.match(/=[\d+]&/)[0].slice(1, 2)),
              };
            })
            .sort((linkA, linkB) => linkA.number - linkB.number);
        } catch (error) {
          this.pages = [];
        }
      } else {
        this.fetchBooksError =
          "Oops! an error occurred while fetching the list of books please try again";
        this.booksLoading = false;
      }
    },

    handlePaginationClick(page, index) {
      this.activePageTab = index;
      this.currentPage = page;
      this.setBooksData();
    },
  },
};
</script>

<style scoped>
.pagin-wrp {
  margin: 12px 0;
}
@media only screen and (min-width: 760px) {
  .pagin-wrp {
    margin: 0;
    justify-content: flex-end;
  }
  .search-inp {
    width: 50%;
  }
}

@media only screen and (min-width: 1024px) {
  .search-inp {
    width: 30%;
  }
}

.pagin-box {
  height: 30px;
  padding: 14px;
  border: thin solid var(--grayAlt);
  cursor: pointer;
}

@media only screen and (min-width: 760px) {
  .table-legend {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>