<template>
      <!-- Begin About Me Section -->
      <div class="section-light about-me" id="about-me">
        <div class="container">
          <div class="column is-12 about-me">
            <h1 class="title has-text-centered section-title">About Me</h1>
          </div>
          <div class="columns is-multiline">
            <div
              class="column is-6 has-vertically-aligned-content"
              data-aos="fade-right"
            >
              <p class="is-larger">
                &emsp;&emsp;<strong
                  >Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Placeat totam nemo culpa tenetur accusamus facilis enim nam impedit odit animi molestiae,
                esse est veniam, iusto ullam. Ex nulla sint illum!</strong
                >
              </p>
              <br />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Placeat totam nemo culpa tenetur accusamus facilis enim nam impedit odit animi molestiae,
                esse est veniam, iusto ullam. Ex nulla sint illum!
              </p>
              <br />
              <div class="is-divider"></div>
              <div class="columns about-links">
                <div class="column">
                  <p class="heading">
                    <strong>Give me a ring</strong>
                  </p>
                  <p class="subheading">
                    {{salahdin.phone}}
                  </p>
                </div>
                <div class="column">
                  <p class="heading">
                    <strong>Email Me</strong>
                  </p>
                  <p class="subheading">
                    {{salahdin.email}}
                  </p>
                </div>
              </div>
            </div>
            <div class="column is-6 right-image " data-aos="fade-left">
              <img class="is-rounded" src="https://picsum.photos/id/366/600/375" alt=""/>
            </div>
          </div>
        </div>
      </div>
</template>


<script>
export default {
  data(){
    return {
      salahdin: {
        email : "salahdinjemal@gmail.com",
        phone : "+251-942586427",
      }
    }
  }
}
</script>