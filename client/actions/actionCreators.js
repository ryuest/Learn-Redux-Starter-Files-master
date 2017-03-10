// increment
export function increment(index) {
  return{
    type: 'INCREMENT_LIKES',
    index
  }
}

// add comments
export function addComent(postId, author, comment) {
  return{
    type: 'INCREMENT_LIKES',
    postId,
    author,
    comment
  }
}

// remove commnent
export function increment(postId, i) {
  return{
    type: 'INCREMENT_LIKES',
    i,
    postId
  }
}
