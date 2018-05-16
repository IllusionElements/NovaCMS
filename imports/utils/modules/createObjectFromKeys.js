const assign = (args, assignee, val) => args.reduce((obj, arg, index, path) => {
  const LAST_KEY_INDEX = path.length - 1
  if (index < LAST_KEY_INDEX) return obj[arg]

  return Object.assign(obj, {
    [arg]: val,
  })
}, assignee)

const createObjectFromKeys = (arg, value) => {
  const createNestedObject = (obj, key, index, path) => {
    const LAST_KEY_INDEX = path.length - 1
    const NEXT_KEY = path[index + 1]
    if (index === 0) {
      return Object.assign(obj, {
        [key]: {},
        cache: {
          path: [key],
        },
      })
    }
    const { cache, cache: { path: pathArr }, ...data } = obj
    cache.path = [...pathArr, key]
    const $path = cache.path
    if (index < LAST_KEY_INDEX) {
      assign($path, obj, {})
      return obj
    }

    assign($path, obj, value)
    return data
  }

  if (arg.includes('.')) {
    const obj = {};
    const argObject = arg
      .split('.')
      .reduce(createNestedObject, {
        cache: {},
      })

    return argObject;
  }
  return {
    [arg]: value,
  }
}

export default createObjectFromKeys
