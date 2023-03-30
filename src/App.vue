<template>
  <div class="main">
    <Header />
    <div class="content d-flex flex-column">
      <!-- <Conditions /> -->
      <!-- <Binding title="Bindings"/> -->
      <!-- <StyleBinding /> -->
      <!-- <MixinApp /> -->
      <ParentComposer />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
// import StyleBinding from './components/demos/StyleBinding.vue';
// import MixinApp from './components/demos/mixins/MixinApp.vue';
import ParentComposer from './components/demos/composition/ParentComposer.vue';
// import Conditions from './components/demos/Conditions.vue'
// import Binding from './components/demos/Binding.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    // MixinApp,
    ParentComposer
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: auto;

}

.main {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: auto;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
