<template>
  <main id="app">
    <BookListing />
  </main>
</template>

<script>
import BookListing from "./pages/booklisting";

export default {
  name: "App",
  components: {
    BookListing,
  },
};
</script>

<style>
:root {
  --primaryText: #111517;
  --white: #ffffff;
  --dodgerBlue: #0483ff;
  --gray: #859191;
  --lightGray: #e6e3e3;
  --grayAlt: #edf0f1;
}

* {
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100%;
  margin: 0%;
  padding: 0%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 42px 24px;
}

.w-full {
  width: 100%;
}

.w-50 {
  width: 50%;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.justify-end {
  justify-content: flex-end;
}

.justify-between {
  justify-content: space-between;
}

.input {
  outline: none;
  padding: 8px 16px;
  border-radius: 4px;
  border: thin solid var(--lightGray);
}

.input::placeholder {
  font-size: 14px;
}

.input:focus {
  border: thin solid var(--dodgerBlue);
}

.primary-content {
    color: var(--white);
    background-color: var(--dodgerBlue);
}
</style>
