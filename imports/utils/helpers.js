import EventEmitter from 'event-emitter'
//few utility functions to assist with type checking and extending schemas
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

//used as a composition function to extend Objects
export const extend = (original, target) => {
    if (!isObject(original) || !isObject(target)) {
        throw new Error(`Expected argument to be of type Object, but got ${
      !isObject(original) && type(original) || !isObject(target) && type(target)}`)
    }
    else {
        return Object.assign({}, ...original, ...target)
    }
}

//composes schemas
export const extendSchema = (schemaToAttach) => (schema) => extend(schema, schemaToAttach);


//inits the event store by passing the event object into it
export const store = (event) => {
    this.events = event;
    const eventStore = new EventEmitter()
    const dispatch = (action, ...args) => {
        const event = this.events[action];
        eventStore.emit(event, ...args)
    }
    const subscribe = (action, listener) => {
        const event = this.events[action];
        eventStore.on(event, listener)
    }
    return {
        dispatch,
        subscribe
    }
}

//generates event names dynamically
export const generateEvents = (serviceName, ...eventNames) =>
    eventNames.reduce((event, eventName) => {
        const eventNameKey = `${serviceName}_${eventName}`;
        return {
            ...event,
            [eventNameKey.toUpperCase()]: eventNameKey.toLowerCase(),
        };
    }, {});
