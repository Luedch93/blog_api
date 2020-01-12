import Post from './Post.dao'

export const createPost = function ({ body: {title, content}}, res, next) {
  const post = {
    title,
    content
  }
  Post.create(post, (err, post)=>{
    if(err) {
      res.json({
        error: err
      })
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
  Post.find({title}, (err, posts) => {
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