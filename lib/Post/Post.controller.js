import Post from './Post.dao'

export const createPost = function ({ body: {title, content, description}}, res, next) {
  const post = {
    title,
    content,
    description
  }
  Post.create(post, (err, post)=>{
    if(err) {
      res.json({
        error: err
      })
      return
    }
    res.json({
      message: "Post created successfully"
    })
  })
}

export const getPosts = function (req, res, next) {
  Post.find({}, (err, posts) => {
    if(err) {
      res.json({
        error: err
      })
    }
    res.json({
      posts: posts
    })
  })
}

export const getPostByTitle = function ({params: {title}}, res, next) {
  Post.getByTitle(title, (err, posts) => {
    if(err) {
      res.json({
        error: err
      })
    }
    res.json({
      posts: posts
    })
  })
}

export const getPostBySlug = function ({params: {slug}}, res, next) {
  Post.getBySlug(slug, (err, post) => {
    if(err) {
      res.json({
        error: err
      })
    }
    res.json({
      post
    })
  })
}