import Alert from '/imports/db/alert/collection'

export default Alert.createQuery('getAlert', {
    $filter: { visible: true },
    message: 1,
    userName: 1,
    date: 1,
    user: {
        name: 1,
    }
})
