import axios from 'axios'

const Axios = axios.create({
  baseURL: "https://api.airtable.com/v0/app4McmfxdYBpBXyg/Table%201"
});

Axios.defaults.headers.common = {'Authorization': `Bearer ` + process.env.VUE_APP_AIRTABLEKEY}
export default{
    getProject(slug) {
        return Axios.get("?filterByFormula={Slug}='" + slug + "'")
        },
    getProjects() {
        return Axios.get()
    },
}