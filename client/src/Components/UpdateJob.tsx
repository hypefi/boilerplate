import React, { useState, useEffect } from 'react'
import { useUpdateJobById } from '../utils/services'

interface updateJob {
    id: number
    name: string
}

const UpdateJob = (props: updateJob) => {
    const [updateJobById] = useUpdateJobById()
    const { id, name } = props
    const [values, setValues] = useState({
        id: id,
        name: name,
    })

    useEffect(() => {
        setValues({
            ...values,
            id: id,
            name: name,
        })
    }, [id, name])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target
        const val = target.value
        setValues({
            ...values,
            name: val,
        })
    }

    const updateJob = async () => {
        try {
            const updatedJob = await updateJobById({
                variables: {
                    id: values.id,
                    JobPatch: {
                        name: values.name,
                    },
                },
            })
            if (
                updatedJob &&
                updatedJob.data &&
                updatedJob.data.updateJobById
            ) {
                alert('Data updated successfully!')
               
            }
        } catch (error) {
            console.error(error)
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(values.name, values.id);
      if (values.name ) {
          updateJob()
        } else {
            alert('Invalid job details')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                />
                <button type="submit">Save</button>
            </form>
        </>
    )
}

export default UpdateJob
