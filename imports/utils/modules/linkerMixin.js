const linkerMixin = ({ links = [], index = null, autoremove = null }) =>(
  links.reduce((linker, link) => {
    const options = {}
    const { linkName, ...Link } = link
    const has = {}.hasOwnProperty
    if (!has.call(Link, 'index')) {
      options.index = index;
    }
    if (!has.call(Link, 'autoremove')) {
      options.autoremove = autoremove;
    }
    return Object.assign(linker, {
      [linkName]: {
        ...Link,
        ...options,
      },
    })
  }, {})
)

export default linkerMixin
