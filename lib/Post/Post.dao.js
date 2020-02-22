import mongoose from 'mongoose'
import postSchema from './Post.model'
import { generateSlug } from '../utils/functions'

postSchema.statics = {
  create: function(data, cb) {
    const newPost = {...data}
    newPost.slug = generateSlug(newPost.title)
    const post = new this(newPost)
    post.save(cb)
  },
  get: function(query, cb) {
    this.find(query, cb);
  },
  getByTitle: function(title, cb) {
    this.find({title}, cb);
  },
  getBySlug: function(slug, cb) {
    this.findOne({slug}, cb)
  }
}

const PostModel = mongoose.model('Posts', postSchema)

export default PostModel
