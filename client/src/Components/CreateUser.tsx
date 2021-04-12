import * as React from "react";
import { ApolloCache } from "@apollo/react-hooks";
import { FetchResult } from "apollo-boost";

import { useCreateUserMutation } from "../utils/services";
import { Create_User, GET_UserS } from "../graphql";
import { IUser, IUserMutation, IUsers } from "../types/User";

const CreateUser: React.FC = () => {
  const [formData, setFormData] = React.useState<IUser | {}>();
  const [CreateUser] = useCreateUserMutation();

  const handleForm = (e: React.FormEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value
    });
  };

  const handleSaveUser = (
    e: React.FormEvent,
    { title, description }: IUser | any
  ) => {
    e.preventDefault();
    CreateUser({
      variables: { title, description },
      update: (
        cache: ApolloCache<IUserMutation>,
        { data: { CreateUser } }: FetchResult<IUserMutation>
      ) => {
        const cacheData = cache.readQuery({ query: GET_UserS }) as IUsers;
        cache.writeQuery({
          query: GET_UserS,
          data: {
            getUsers: [...cacheData.getUsers, CreateUser]
          }
        });
      }
    });
  };

  return (
    <form className="Form" onSubmit={(e) => handleSaveUser(e, formData)}>
      <div>
        <div>
          <label htmlFor="name">Title</label>
          <input onChange={handleForm} type="text" id="title" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input onChange={handleForm} type="text" id="description" />
        </div>
      </div>
      <button>Create User</button>
    </form>
  );
};

export default CreateUser;
