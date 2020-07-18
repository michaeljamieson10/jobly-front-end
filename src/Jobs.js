import React, {useState, useEffect} from 'react';
import SearchForm from './SearchForm';
import JoblyApi from './JoblyApi'
import CardList from './CardList'
function Jobs() {
    
    const [jobs, setJobs] = useState([]) 
    
    async function search(search) {
        let jobs = await JoblyApi.getJobs(search);
        setJobs(jobs);
      }
    async function apply(idx){
        let jobId = jobs[idx].id;
        console.log(jobId)
        let message = await JoblyApi.jobApply(jobId);
        setJobs(j => j.map(job => 
            job.id === jobId ? { ...job, state: message} : job
          ));
    }

    useEffect(()=>{
        search()
    },
    [])

    if (jobs === undefined) return null;

    return (
        <>
        <SearchForm title='jobs' searchFor={search} />
             <CardList cards={jobs} apply={apply} />           
        </>
    )
};
export default Jobs;