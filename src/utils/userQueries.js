export const UsersQueries = {
  login: `mutation Login($email: String!, $password: String!){
    login(email: $email, password: $password)
    {
      user
      {
        id
        displayName
        email
        username
      }
      token
      loginDate
    }
  }`,
  register: `mutation Register($username: String!, $email: String!, $password: String!, $displayName: String!){
    register(username: $username, email: $email, password: $password, displayName: $displayName, role: ["user"])
  }`,
};
