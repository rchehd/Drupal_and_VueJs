<template>
  <div class="container">
    <div class="row">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Test',
  props: {
    msg: String
  }
}
</script>