<template>
  <div id="app">
      <form action="#home">
      <button id="toTop" title="Go to top">
        <i class="fas fa-angle-up"></i>
      </button>
    </form>
    <app-header></app-header>
     <div class="main-content">
        <about-me></about-me>
        <resume></resume>
        <skills></skills>
        <projects></projects>
     </div>
     <app-footer></app-footer>
  </div>
</template>

<script>


import Header from '../components/Header.vue'
import AboutMe from '../components/AboutMe.vue'
import Skills from '../components/Skills.vue'
import Footer from '../components/Footer.vue'
import Resume from '../components/Resume.vue'
import Projects from '../components/Projects.vue'

export default {
  components: {
    
    'app-header':Header,
    'about-me':AboutMe,
    'app-footer':Footer,
    'skills' : Skills,
    'resume':Resume,
    'projects' : Projects
  }
}
</script>

<style>

</style>
