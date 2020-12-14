<template>
  <div class="home">
    <HelloWorld/>
    <Section/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Section from '@/components/Section.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Section
  }
}
</script>
