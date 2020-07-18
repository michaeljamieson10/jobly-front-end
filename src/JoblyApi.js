import axios from "axios";

class JoblyApi {
    static async request(endpoint, paramsOrData = {}, verb = "get") {
      // paramsOrData._token = ( // for now, hardcode token for "testing"
      // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc" +
      // "3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30." +
      // "COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U");
  
      paramsOrData._token = ( // for now, hardcode token for "testing"
      window.localStorage.getItem('token')
      );
  
      console.debug("API Call:", endpoint, paramsOrData, verb);
      try {
        return (await axios({
          method: verb,
          url: `http://localhost:3001/${endpoint}`,
          [verb === "get" ? "params" : "data"]: paramsOrData})).data;
          // axios sends query string data via the "params" key,
          // and request body data via the "data" key,
          // so the key we need depends on the HTTP verb
      }
  
      catch(err) {
        console.error("API Error:", err.response);
        let message = err.response.data.message;
        throw Array.isArray(message) ? message : [message];
      }
    }
    
    static async getCompanies(search) {
      let res = await this.request(`companies`, { search });
      return res.companies;
    }
    
    static async getJobs(search) {
      let res = await this.request(`jobs`, { search });
      return res.jobs;
    }
  
    static async getCompany(handle) {
      let res = await this.request(`companies/${handle}`);
      return res.company;
    }
    static async login(paramsorData) {
      let res = await this.request(`login`,paramsorData, 'post');
      return res
    }
    static async getCurrentUser(username) {
      let res = await this.request(`users/${username}`);
      return res.user;
    }
    static async createNewUser(data){
      let res = await this.request(`users/`,data,'post');
      return res;
    }
    static async updateCurrentUser(username, data) {
      let res = await this.request(`users/${username}`,data,'patch');
      return res.user;
    }
    static async getSpecificJob(idArray){
      // let baseURL = `http://localhost:3001/jobs`
      const jArray = idArray.map(async jobId => {
        const response = await this.request(`jobs/${jobId}`);
        // const response = await this.request(`${baseURL}/${jobId}`);
        // const response = await fetch(`${baseURL}/${jobId}`);
        return response
        // return response.json();
      });
      const jobs = await Promise.all(jArray)
      return jobs;

      // const newArray = idArray.map(id => `${baseURL}/${id}`);
      // const newestArray = []
      // Promise.all(newArray).then((results) => {
      //   for (let i = 0; i < results.length; i++){
      //     console.log(results[i])
      //     let prom = await results[i];
      //     newestArray.push(prom)
      //   }

      // })
      // .catch((err) => console.log(err)); 
      // return newestArray;
    }

    static async jobApply(id,data) {
      let res = await this.request(`jobs/${id}/apply`,data,'post');
      return res;
    }
    
  }
  export default JoblyApi;