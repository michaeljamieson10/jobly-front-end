import React from 'react';
import { Card, CardBody, Button } from "reactstrap";
function JobCard({item={}, handleApply}) {
    const {salary, title, equity, state} = item;
    return (
        <section>
            <Card>
                <CardBody>
                    <h6 className="card-title d-flex justify-content-between">{title}</h6>
                    <p>Salary:{salary}<br></br>Equity:{equity}</p>
                    <Button className="font-weight-bold text-uppercase float-right" color="danger" onClick={handleApply}>{state ? 'Applied' :'Apply'}</Button>
                </CardBody>
            </Card>
        </section>
    )
};
export default JobCard;