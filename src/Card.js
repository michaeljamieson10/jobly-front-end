import React from 'react';
import CompanyCard from "./CompanyCard"
import JobCard from "./JobCard";
import './CompanyCard.css'
// if item has handle its a company
function Card({item={}, apply = () => null , idx}) {
    if (item.handle) {
        return <CompanyCard item={item} />
    } else {
        return <JobCard item={item} handleApply={() => apply(idx)} />;
    }
        
};
export default Card;