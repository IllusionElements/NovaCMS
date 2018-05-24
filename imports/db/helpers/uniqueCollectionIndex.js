import { ensureIndex, ensureIndexes } from './collectionIndex.js'

export const ensureUniqueIndex = async (collection, index, options = {}) => (
  ensureIndex(collection, index, { ...options, unique: true })
)

export const ensureUniqueIndexes = async (
  collection,
  { ...keys },
  options = {}) => {
  const indexOptions = {
    ...options,
    unique: true,
  }

  return ensureIndexes(collection, keys, indexOptions)
}

