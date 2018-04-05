export const transferStatic = (obj) => {
  const _CLASS_ = new obj()
  const getOwnPropertyNames = (_obj) => Object.getOwnPropertyNames(_obj)
    .filter(el => !['name', 'prototype', 'length'].includes(el))
  const staticMethods = getOwnPropertyNames(_CLASS_.constructor)
  const nonStaticMethods = getOwnPropertyNames(_CLASS_.constructor.prototype)
  const assign = (objekt) => {

    staticMethods.forEach((name) => Object.assign(objekt.prototype, {
      [name]: obj[name] }))
    nonStaticMethods.forEach((name) => Object.assign(objekt.prototype, {
      [name]: obj.prototype[name] }));
  }
  const compose = () => {
    const _class = class {}
    assign(_class);
    return _class;
  }
  const Implements = (object) => {
    assign(object);
    return new object();
  }

  return {
    Implements,
    compose
  }
}
