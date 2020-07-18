import React,{useEffect, useState, useContext} from 'react';
import { Container } from 'reactstrap';
import {useParams} from 'react-router-dom';
import JoblyApi from './JoblyApi'
import CardList from './CardList'
import UserContext from "./UserContext";
// // import JobCard from './JobCard'

function CompanyDetailCard() {
    const [specificCompanyState, setSpecificCompanyState] = useState([]);
    const [jobs, setJobs] = useState([]);
    const { currentUser } = useContext(UserContext);
    const {id} = useParams()
    useEffect(() => {
        const jobsCurrent = currentUser.jobs; 
    async function getItems(){
        const resp = await JoblyApi.getCompany(id)
        console.log(resp)
        setSpecificCompanyState(specificCompanyState => resp);
        const currentUserJobsIdApplied = new Set(jobsCurrent.map(job => job.id));
        let rj = resp.jobs.map(companyJob =>
            ({...companyJob,
            state: currentUserJobsIdApplied.has(companyJob.id) ? "applied" : null
        }));
        console.log(rj)
        setJobs(j => rj)
    };
    // calls the async func
    getItems();
    },
[currentUser.jobs, id]);
async function apply(idx){
    let jobId = jobs[idx].id;
    await JoblyApi.jobApply(jobId);
    // setJobs(j => j.map(job => 
    //     job.id === jobId ? { ...job, state: message} : job
    //   ));
}
  
    return (
        <Container>
            <div><h5>{specificCompanyState.name}</h5>
    <p>{specificCompanyState.description}</p>
        {/* {specificCompanyJobs.map(jobs =>(<Jobs))} */}
        <CardList cards={jobs}  apply={apply} />
            </div>
        </Container>
    )
};
export default CompanyDetailCard;