import * as React from 'react'
import { useState, useEffect } from 'react'
import { useCreateUser } from '../utils/services'

interface postUser {
    name: string
    email: string
    password: string
}


const PostUser = (props: postUser) => {
      const [createUser] = useCreateUser()
      const { name, email, password } = props
      const [values, setValues] = useState({
            name: name,
            email: email,
            password: password,
        })
      useEffect(() => {
        setValues({
          ...values,
          name: name,
          email: email,
          password: password,
        })
      }, [name, email, password])
    

    const postUser = async () => {
        try {
            const postedUser = await createUser({
                variables: {
                    user: {
                        name: values.name,
                        email: values.email,
                        password: values.password,
                    },
                },
            })
            if (postedUser && postedUser.data && postedUser.data.createUser) {
                alert('Data updated suvvessfully')
            }
        } catch (error) {
            console.error(error)
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(values.name, values.email, values.password)
      const target = event.target;
      const val = target.value
      setValues({
        ...values,
        name: val,
      })
    }

    return (
        <form className="Form" onSubmit={(e) => handleSaveUser(e, formData)}>
            <div>
                <div>
                    <label htmlFor="name">Title</label>
                    <input onChange={handleForm} type="text" id="title" />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input onChange={handleForm} type="text" id="email" />
                  </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input onChange={handleForm} type="text" id="password" />
                </div>
            </div>
            <button>Create User</button>
        </form>
    )
}

export default CreateUser