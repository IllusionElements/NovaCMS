import check from 'meteor/check'
export const queryExposure = ([...fn], method, publication, unblock) => {
  const security = fn.length > 1 ? [...fn] : fn[0]
  //ALL Params aside from fn should be a boolean.

  check([method, publication, unblock], [Boolean]);

  return {
    firewall: security,
    method,
    publication,
    unblock,
  }
}
