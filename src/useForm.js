import {useState} from 'react'

export const useForm = (initialValue) => {
    const [values, setValues] = useState(initialValue)
    // const [ email, setEmail ] = useState(initialValue)
    // const [ password, setPassword ] = useState("")


    // returning things from the hook...
    return [
        values,
        e => {
            setValues({
                // keeping the values inside here
                ...values,
                [e.target.name]: e.target.value
            })
        }
    ]
}