<template>
  <div id="app">
    <hamburger></hamburger>
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
        <graphics></graphics>
        <socials></socials>
        <contact></contact>
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
import Contact from '../components/Contact.vue'
import Hamburger from '../components/hamburger.vue'
import Socials from '../components/Socials.vue'
import Graphics from '../components/GraphicsDesign.vue'


export default {
  components: {
    
    'app-header':Header,
    'about-me':AboutMe,
    'app-footer':Footer,
    'skills' : Skills,
    'resume':Resume,
    'projects' : Projects,
    'contact': Contact,
    'hamburger':Hamburger,
    'socials':Socials,
    'graphics':Graphics
  }
}
</script>

<style>

</style>
