import { useState } from 'react'

export const useForm = () => {
    const [values, setValues] = useState({})
    const [showPassword, setShowPassword] = useState(false)

    const handleChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return {
        states: {
            values,
            showPassword
        },
        setters: {
            setShowPassword
        },
        actions: {
            handleChange
        }
    }
}
