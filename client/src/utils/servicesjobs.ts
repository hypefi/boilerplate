import {
    useUpdateJobByIdMutation,
    useGetJobsQuery,
    useCreateJobMutation,
} from '../generated/graphql'

export const useGetJobs = useGetJobsQuery
export const useUpdateJobById = useUpdateJobByIdMutation
export const useCreateJob = useCreateJobMutation
