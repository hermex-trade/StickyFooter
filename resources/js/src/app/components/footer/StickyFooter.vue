<template>
  <div id="sticky-footer" :class="{visible: scrollPosition > visibleFromOffset, hidden: scrollPosition < visibleFromOffset}">
    <slot></slot>
  </div>
</template>

<script>
export default {

  props: {
    visibleFromOffset: {
      type: Number,
      required: true,
    },
  },

  data: function() {
    return {
      scrollPosition: null
    }
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },

  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }
}
</script>

<style scoped>
#sticky-footer {
  position: fixed;
  bottom: 0;
  background: white;
  height: 200px;
}
.visible {
  visibility: visible;
}
.hidden {
  visibility: hidden;
}
</style>
