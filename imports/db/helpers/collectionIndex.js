const makePromise = fn => (...args) => fn(...args, (err, result) => (
  new Promise((resolve, reject) => {
    if (err) reject(err)
    resolve(result)
  })))

const rawCol = collection => collection.rawCollection()
export const createIndex = async (collection, index, options = {}) => {
  const dbPromise = rawCol(collection).createIndex
    ? makePromise(rawCol(collection).createIndex)
    : makePromise(rawCol(collection).ensureIndex)
  const db = await dbPromise(index, options)
  return db
}

export const createIndexes = async (collection, [...indexes], options = {}) => {
  const dbPromise = rawCol(collection).createIndexes
    ? makePromise(rawCol(collection).createIndexes)
    : makePromise(rawCol(collection).ensureIndex)

  const db = await dbPromise(...indexes, options)

  return db
}
