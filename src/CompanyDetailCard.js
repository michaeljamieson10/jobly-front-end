import React,{useEffect, useState, useContext} from 'react';
import { Container, Row, Col } from 'reactstrap';
import {useParams} from 'react-router-dom';
import JoblyApi from './JoblyApi'
import CardList from './CardList'
import UserContext from "./UserContext";
// // import JobCard from './JobCard'

function CompanyDetailCard() {
    const { currentUser } = useContext(UserContext);
    // const { jobs } = currentUser; 
    const {id} = useParams()
    const [specificCompanyState, setSpecificCompanyState] = useState([]);
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
    async function getItems(){
        const resp = await JoblyApi.getCompany(id)
        console.log(resp)
        setSpecificCompanyState(specificCompanyState => resp);
        // let allJobs = await JoblyApi.getJobs();
        const currentUserJobsIdApplied = new Set(currentUser.jobs.map(job => job.id));
        console.log(currentUserJobsIdApplied,'id applied mofo')
        // let filteredJobs = allJobs.filter((job) => resp.jobs.id === job.id)
        const filteredJobs = []
        console.log(resp.jobs,'catcatcatcats')
        console.log(currentUser.jobs,'lovejobs')
        let rj = resp.jobs.map(companyJob =>
            ({...companyJob,
            state: currentUserJobsIdApplied.has(companyJob.id) ? "applied" : null
        }));
        console.log(rj)
        setJobs(j => rj)
        //     resp.jobs.filter(function(companyJob) {
        //     return currentUser.jobs.filter(function(currentUserJobs) {
        //         if(companyJob.id === currentUserJobs.id){
        //             console.log(currentUserJobs,'this is new filtered data')
        //             filteredJobs.push({...companyJob, state: 'applied'});
        //         }else{
        //             filteredJobs.push({...companyJob, state: null});
        //         }
        //     })
        // })
        // ,filteredJobs
        // const jobsIDsAppliedTo = new Set(filteredJobs.map(job => job));
        //   setJobs(jobsIDsAppliedTo);
    };
    // calls the async func
    getItems();
    },
[]);
async function apply(idx){
    let jobId = jobs[idx].id;
    let message = await JoblyApi.jobApply(jobId);
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