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
  --primaryText: #111314;
  --white: #ffffff;
  --dodgerBlue: #0483ff;
  --gray: #859191;
  --lightGray: #e6e3e3;
  --grayAlt: #f3f4f5;
  --error: #fd8a8a;
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

.fit-content {
  width: fit-content;
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

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.error-txt {
  color: var(--error);
}

.gray-text {
  color: var(--gray);
  background-color: var(--white);
}

.loader-tube {
  width: 250px;
  height: 10px;
  border-radius: 8px;
  border: thin solid var(--lightGray);
  position: relative;
  overflow-x: hidden;
}

.loader-tube .loader {
  width: 30px;
  height: 8px;
  border-radius: 8px;
  background-color: var(--dodgerBlue);
  position: absolute;
  animation-name: loader;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}

@keyframes loader {
  0% {
    background-color: var(--dodgerBlue);
    left: -20px;
    top: 1px;
  }
  50% {
    background-color: var(--dodgerBlue);
    left: 240px;
    top: 1px;
  }
  100% {
    background-color: var(--dodgerBlue);
    left: -20px;
    top: 1px;
  }
}
</style>
