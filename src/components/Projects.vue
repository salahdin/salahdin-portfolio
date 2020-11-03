<template>
         <!-- Begin Work Content -->
      <div class="section-dark my-work" id="my-work">
        <div class="container">
          <div
            class="columns is-multiline"
            data-aos="fade-in"
            data-aos-easing="linear"
          >
            <div class="column is-12">
              <h1 class="title has-text-centered section-title">Projects</h1>
            </div>
            <div v-for="project in projects" :key="project.slug" class="column is-3">
                <h5>{{project.title}}</h5>
                <router-link :to="'/project/'+project.slug">
                <figure class="image is-2by1 work-item">
                <figcaption style="color: black">{{project.title}}</figcaption>
                <img v-bind:src="project.image" alt="">
                </figure>
                </router-link>
            </div>
          </div>
        </div>
      </div>
</template>



<script>
    import ProjectsService from '@/services/ProjectsService'
    export default {
        name: "projects",
        data() {
            return{
                airtableResponse: []
            }
        },
        mounted: function () {
            let self = this
            async function getProjects() {
                try{
                    const response = await ProjectsService.getProjects()
                    console.log(response)
                    self.airtableResponse = response.data.records
                    console.log(response.records)

                }catch(err){
                    console.log(err)
                }
                }
              getProjects()         
        },
        computed: {
            projects(){
                let self = this
                let projectList = []
                for (var i = 0; i < self.airtableResponse.length; i++) {
                    if (self.airtableResponse[i].fields.Published){
                        let project = {
                            title: self.airtableResponse[i].fields.Title,
                            date: self.airtableResponse[i].fields["Date Published"],
                            snippet: self.airtableResponse[i].fields.Excerpt,
                            image: self.airtableResponse[i].fields.Image[0].url,
                            slug: self.airtableResponse[i].fields.slug
                        }
                        projectList.push(project)
                    }
                }
                return projectList
            }
        }
    };
</script>