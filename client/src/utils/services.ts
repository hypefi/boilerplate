import {
    useUpdateUserByIdMutation,
    useGetUsersQuery,
    MutationCreateUserArgs,
} from '../generated/graphql'

export const useGetUsers = useGetUsersQuery
export const useUpdateUserById = useUpdateUserByIdMutation
export const createUsers = MutationCreateUserArgs
