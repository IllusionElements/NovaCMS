const throws = (FN, throwable) => {
  if (!throwable) throw new Error(FN)
  throw (FN.prototype && FN.constructor)
    ? new FN(throwable)
    : FN(throwable);
}

export default throws
