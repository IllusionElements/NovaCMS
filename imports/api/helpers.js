//@{helpers} - constructor
const str = Object.prototype.toString

export const isObject = (Arg) => {
    return str.call(Arg).slice(8, -1) === 'Object'
}

export const isBoolean = (arg) => {
    return str.call(arg).slice(8, -1) === 'Boolean'
}

export const type = (object, constructor) => {
    return isBoolean(constructor) && constructor === true ? object.constructor.name : str.call(object).slice(8, -1)
}

export const extend = (original, target) => {
    if (!isObject(original) || !isObject(target)) {
        throw new Error(`Expected argument to be of type Object, but got ${
      !isObject(original) && type(original) || !isObject(target) && type(target)}`)
    }
    else {
        return Object.assign({}, ...original, ...target)
    }
}

export const extendSchema = (schemaToAttach) => (schema) => extend(schema, schemaToAttach);
