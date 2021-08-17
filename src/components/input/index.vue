<template>
    <input
        class="input w-full search-inp"
        type="text"
        :value="value"
        @input="$emit('input', $event.target.value)"
    />
</template>

<script>
export default {
    name: 'base-input',
    props: {
        value: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
@media only screen and (min-width: 760px) {
  .search-inp {
    width: 50%;
  }
}

@media only screen and (min-width: 1024px) {
  .search-inp {
    width: 30%;
  }
}
</style>