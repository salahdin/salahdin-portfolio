<template>
<div class="container">
    <div class="columns is-mobile is-centered">
        <div class="column">
            <div class="card ">
                <div class="card-image">
                    <figure class="image is-128by128" v-for="image in project.images" :key="image.url">
                    <img :src="image.url" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media-content">
                        <p class="title is-4">{{project.title}}</p>
                    </div>
                    </div>

                    <div class="content">
                    <p>{{project.body}}</p>
                    tools : <a href="#">{{project.tags}}</a> 
                    <br>
                    link : <a v-bind="project.link">{{project.link}}</a>
                    </div>
                </div>
                </div>
    </div>
</div>
</template>


<script>
    import ProjectsService from '@/services/ProjectsService'
    export default {
        name: "project",
        
        data() {
            return{
                airtableResponse: []
            }
        },
        mounted: function () {
            let self = this
            console.log("here 1")
            async function getProject() {
                try{
                    const response = await ProjectsService.getProject(self.$route.params.slug)
                    console.log(response)
                    self.airtableResponse = response.data.records

                }catch(err){
                    console.log(err)
                }
            }
            getProject()            
        },
        computed: {
            project(){
                let self = this
                if (self.airtableResponse[0]){
                    let thisProject = {
                        title: self.airtableResponse[0].fields.Title,
                        snippet: self.airtableResponse[0].fields.Excerpt,
                        images: self.airtableResponse[0].fields.Image,
                        body: self.airtableResponse[0].fields.Body,
                        tags: self.airtableResponse[0].fields.tags,
                        link: self.airtableResponse[0].fields.gitlink,
                        
                    }
                    return thisProject
                }
                return {}
            }
        }
    };
</script>