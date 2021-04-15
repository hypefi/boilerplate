import React, { useState, useEffect } from 'react'
import { useGetUsers } from '../utils/services'
import { User } from '../generated/graphql'
import UpdateUser from './UpdateUser'

var newreload;

const Users: React.FC = ({newreload}) => {
    const [users, setUsers] = useState(reload)
    const { data, error, loading } = useGetUsers()
    const [values, setValues] = useState({
        id: 0,
        name: '',
    })
    
    const editUser = (userId: number, userName: string) => {
        setValues({
            ...values,
            id: userId,
            name: userName,
        })
    }

    useEffect(() => {
        if (data) {
            if (data && data.allUsers && data.allUsers.nodes) {
                setUsers(data.allUsers.nodes)
            }
        }
        if (error) {
            console.log(error)
        }
        if (loading) {
            console.log(loading)
        }
    }, [data, error, loading])

    return (
        <>
            <h2>Hello users,</h2>
            {users &&
                users.length > 0 &&
                users.map((user: User, index: number) => (
                    <p key={`user_${index}`}>
                        {user.name}{' '}
                        <button onClick={() => editUser(user.id, user.name)}>
                            Edit
                        </button>
                    </p>
                ))}
            <UpdateUser id={values.id} name={values.name} />
        </>
    )
}

export default Users
