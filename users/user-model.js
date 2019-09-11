const db = require('../data/db-config')

module.exports = {
  findUserPosts,
}

function findUserPosts(id) {
  return db('users as u')
    .join('posts as p', 'u.id', '=', 'p.user_id')
    .where({user_id: id})
    .select('p.id', 'p.contents', 'u.username')
    .then(posts => {
      return posts
    })
}