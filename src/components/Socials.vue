<template>
  <div id="social-media">
  <div class="container has-text-centered">
    <p>FIND ME ON SOCIAL MEDIA</p>
    <div class="social-icons">
      <a href=""><img src="../assets/image/icons/instagram.svg" alt="instagram"></a>
      <a href="#"><img src="../assets/image/icons/whatsapp.svg" alt="whatsapp"></a>
      <a href="#"><img src="../assets/image/icons/twitter.svg" alt="twitter"></a>
      <a href="https://github.com/salahdin"><img src="../assets/image/icons/github.svg" alt="github"></a>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
#social-media
{
    background-color: rgb(250, 250, 253);
    padding: 100px 0;
}

.social-icons img
{
    width: 60px;
    transition: 0.5s;
    margin-top: 10px;
    padding-left: 20px;
}

.social-icons a:hover img{
    transform: translateY(-10px);
}
</style>