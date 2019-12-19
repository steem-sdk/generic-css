<template>
  <div class="home">
    <Media />
    <Topo />
    <Container />
    <Grid />
    <Utils />
    <Post />
    <Color />
  </div>
</template>

<script>
import Media from '@/components/media.vue'
import Topo from '@/components/topo.vue'
import Container from '@/components/container.vue'
import Grid from '@/components/grid.vue'
import Post from '@/components/post.vue'
import Utils from '@/components/utils.vue'
import Color from '@/components/color.vue'

export default {
  name: 'home',
  components: {
    Media,
    Topo,
    Container,
    Grid,
    Post,
    Utils,
    Color
  }
}
</script>
