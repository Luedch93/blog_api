import mongoose from 'mongoose'
import postSchema from './Post.model'

postSchema.statics = {
  create: function(data, cb) {
    const post = new this(data)
    post.save(cb)
  },
  get: function(query, cb) {
    this.find(query, cb);
  },
  getByTitle: function(title, cb) {
    this.find({title}, cb);
  }
}

const PostModel = mongoose.model('Posts', postSchema)

export default PostModel
