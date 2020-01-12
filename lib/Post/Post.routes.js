import { createPost, getPostByTitle, getPosts } from './Post.controller'

export default function(router) {
  router.post('/create', createPost),
  router.get('/get', getPosts),
  router.get('/get/:title', getPostByTitle)
}