export const PostsQueries = {
    posts: `query {
        posts {
          id
          title
          body
          createDate
          likes
          author {
            displayName
          }
          comments(numLimit: 1) {
            id
            comment
            likes
            user {
              id
              displayName
            }
          }
        }
      }`,
      createPost: `mutation CreatePost($title: String!, $body: String!){
        createPost(title: $title, body: $body)
      }`,
      post: `query Post($id: ID!){
        post(id: $id)
        {
          id
          title
          body
          createDate
          likes
          author {
            displayName
          }
          comments {
            id
            comment
            likes
            user {
              id
              displayName
            }
          }
        }
      }`,
      createComment: `mutation CreateComment($comment: String!, $postId: ID!){
        createComment(comment: $comment, postId: $postId)
      }`,
  };