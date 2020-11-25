<template>
  <Slide right>
      <a id="home" href="#">
        <span>Home</span>
      </a>
      <a id="home" href="#about-me">
        <span>About Me</span>
      </a>
      <a id="home" href="#skills">
        <span>Skills</span>
      </a>
      <a id="home" href="#my-work">
        <span>My Work</span>
      </a>
      <a id="home" href="#graphics-design">
        <span>Graphics Design</span>
      </a>
      <a id="home" href="#social-media">
        <span>Social Media</span>
      </a>
      <a id="home" href="#contact">
        <span>Contact</span>
      </a>
      
    </Slide>
</template>

<script>
import { Slide } from 'vue-burger-menu'
export default {

components: {
        Slide // Register your component
    }
}
</script>

<style>
.bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      left: 36px;
      top: 36px;
      cursor: pointer;
    }
    .bm-burger-bars {
      background-color: #ffffff;
    }
    .line-style {
      position: absolute;
      height: 20%;
      left: 0;
      right: 0;
    }
    .cross-style {
      position: absolute;
      top: 12px;
      right: 2px;
      cursor: pointer;
    }
    .bm-cross {
      background: #ffffff;
    }
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }
    .bm-menu {
      height: 100%; /* 100% Full-height */
      width: 0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1000; /* Stay on top */
      top: 0;
      left: 0;
      background-color: rgb(70, 66, 109); /* Black*/
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }
 
    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    .bm-item-list {
      color: #b8b7ad;
      margin-left: 10%;
      font-size: 20px;
    }
    .bm-item-list > * {
      display: flex;
      text-decoration: none;
      padding: 0.7em;
    }
    .bm-item-list > * > span {
      margin-left: 10px;
      font-weight: 700;
      color: white;
    }
    .bm-item-list > * > span:hover {
      color: rgb(250, 137, 92);
      transform: translateY(-1px);
    }



</style>