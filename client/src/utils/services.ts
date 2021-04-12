import {
    useUpdateUserByIdMutation,
    useGetUsersQuery,
    useCreateUserMutation,
} from '../generated/graphql'

export const useGetUsers = useGetUsersQuery
export const useUpdateUserById = useUpdateUserByIdMutation
export const useCreateUser = useCreateUserMutation
