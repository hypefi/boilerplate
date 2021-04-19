import * as React from 'react'
import { useState, useEffect } from 'react'
import { useCreateUser } from '../utils/services'

interface postUser {
    name: string
    email: string
    password: string
}

//still to check inputs syntax
const PostUser = (handleQuery: any, props: postUser) => {
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
              //            alert('Data updated successfully')
          
              
            }
        } catch (error) {
            console.error(error)
        }
    }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    console.log('values', values)
    console.log('submit',values.name, values.email, values.password)
     if (values.name ) {
       postUser()
       // handleQuery(event)
     } else {
         alert('Invalid user details')
     }
    }
    
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
         const target = event.target
         const val = target.value
         console.log("target", target.id, "val", val)
          setValues({
             ...values,
           [event.target.id]: val,
         })
     }
    

    return (
        <form className="Form" onSubmit={(e) => handleSubmit(e)}>
            <div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input onChange={handleChange} type="text" id="name" />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input onChange={handleChange} type="text" id="email" />
                  </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input onChange={handleChange} type="password" id="password" />
                </div>
            </div>
            <button type="submit" onClick={handleQuery}>Create User</button>
        </form>
    )
}

export default PostUser
