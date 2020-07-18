import React,{useEffect, useState} from 'react';
import './CompanyCard.css';
import SearchForm from './SearchForm';
import JoblyApi from './JoblyApi'
import CardList from './CardList'

function Companies() {
    const [companies,setCompanies] = useState([])
    
    // if search put into by search form will search and put into state to show on page
    // without state would not put onto page
    async function search(search) {
        let companiesArray = await JoblyApi.getCompanies(search);
        setCompanies(companiesArray);
    }

    useEffect(() => {
        search()
    },
    [])
    
    return (
        <>
        <SearchForm title="companies" searchFor={search} />
         <CardList cards={companies} />
        </>
    )

};
export default Companies;