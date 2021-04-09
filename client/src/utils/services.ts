import {
    useUpdateUserByIdMutation,
    useGetUsersQuery,
    MutationCreateUserArgs,
} from '../generated/graphql'

export const useGetUsers = useGetUsersQuery
export const createUsers = MutationCreateUserArgs
export const useUpdateUserById = useUpdateUserByIdMutation

