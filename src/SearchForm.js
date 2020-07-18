import React, { useState} from "react";
import {
  Card,
  CardBody,
  Button
} from "reactstrap";

const SearchForm = ({ title, searchFor }) => {
  const [search, setSearch] = useState("");
  const handleSubmit = evt => {
    evt.preventDefault();
    console.log("Check out state ->", formData);
    // do something with the data submitted
    console.log(formData.search,'<-- search')
    async function getItems() {
        searchFor(search);
      }
      searchFor(search);
    getItems()
    setFormData({
      search:""
    });
  };
  
  const [formData, setFormData] = useState({
    search: ""
  });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
    setSearch(evt.target.value);
  };
  // end handleChange

  return (
    <div>
    <section className="col-md-10">
    <Card>
      <CardBody>
    <form onSubmit={handleSubmit}>
      <p>
      <input
        id="search"
        placeholder="Enter Search Term.."
        name="search"
        value={formData.search}
        onChange={handleChange}
      />
      </p>
      <Button color="primary">Submit</Button>
    </form>
      </CardBody>
      </Card>
    </section>
    </div>
  );
};
// end

export default SearchForm;
