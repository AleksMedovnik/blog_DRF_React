import { useEffect, useState } from "react";
import CustomForm from "../components/Form";
import axios from 'axios';

const FormHOC = props => {
    const [state, setState] = useState({
        cats: [],
        catSelected: {}
    })


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/cats/')
            .then(response => {
                setState({
                    cats: response.data,
                    catSelected: response.data[0]
                })
            })
    }, [])

    if (state.cats.length){
        return (
            <CustomForm {...props} state={state} />
        )
    }

}

export default FormHOC;