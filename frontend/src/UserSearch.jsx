import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USERS, DELETE_USER } from "./graphql";
import { useDebounce } from "./useDebounce";

const UserSearch = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);

  const { data, loading, error } = useQuery(GET_USERS, {
    variables: { search: debouncedSearch },
    skip: debouncedSearch.length < 3
  });

  const [deleteUser] = useMutation(DELETE_USER, {
    update(cache, { data: { deleteUser } }, { variables }) {
      if (!deleteUser) return;

      cache.modify({
        fields: {
          users(existingUsers = [], { readField }) {
            return existingUsers.filter(
              user => readField("id", user) !== variables.id
            );
          }
        }
      });
    }
  });

  const handleDelete = (id) => {
    deleteUser({
      variables: { id },
      optimisticResponse: { deleteUser: true }
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Search</h2>

      <input
        placeholder="Type at least 3 letters..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p>Error loading users</p>}

      <ul>
        {data?.users?.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserSearch;
