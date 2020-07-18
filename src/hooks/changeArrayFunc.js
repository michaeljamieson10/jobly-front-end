import { useState } from "react";
import axios from "axios";
import JoblyApi from "../JoblyApi"
function ChangeArrayFunc(BASE_URL, name) {
    const [array, setArray] = useState([]);
    const changeArray = async (title,search) => {
            
            console.log(title, search)
            const resp = await JoblyApi.request(title, search);
            // console.log(item)
            setArray(array => resp[title]);


    }
    const specificArray = async (id) => {
      const resp = await JoblyApi.getCompany(id)
      // console.log(resp, 'this is inside specific array')
      setArray(array => resp)
    }
    return [array, setArray ,changeArray, specificArray];
  };

export default ChangeArrayFunc;