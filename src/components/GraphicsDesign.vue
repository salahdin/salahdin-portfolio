<template>
         <!-- Begin Work Content -->
      <div class="section-light my-work" id="graphics-design">
        <div class="container">
            <div class="column is-12">
              <h1 class="title has-text-centered section-title">Graphics Design</h1>
            </div>
                <silent-box :gallery="gallery"></silent-box>
        </div>
      </div>
</template>



<script>
    export default {
        name: "projects",

        data() {
            return{
                airtableResponse: [],
                gallery: [
                            {
                                src: 'https://i.ibb.co/j3MKHkf/construction-logo.jpg',
                                description: 'sample logo for a construction company',
                                thumbnailWidth: '220px'
                            },
                            {
                                src: 'https://i.ibb.co/HP9wk6M/uniberry.jpg',
                                description: 'sample corporate logo',
                                thumbnailWidth: '220px'
                            },
                            {
                                src: 'https://i.ibb.co/YX2vNZY/sira.jpg',
                                description: 'sample logo with amharic text',
                                thumbnailWidth: '220px'
                            },
                            {
                                src: 'https://i.ibb.co/Z1GSCcC/slash.jpg',
                                description: 'sample logo',
                                thumbnailWidth: '220px'
                            },
                            {
                                src: 'https://i.ibb.co/MVJrY8z/coffee-logo.jpg',
                                description: 'sample logo for a cafe',
                                thumbnailWidth: '220px'
                            },
                          ]
            }  
        },



    };
</script>