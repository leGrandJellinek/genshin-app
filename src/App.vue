<template>
  <VApp>
    <Header />
    <VMain>
      <VContainer>
          <router-view/>
      </VContainer>
    </VMain>
  </VApp>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',

  data () {
    return {
      //
    }
  },
})
</script>
