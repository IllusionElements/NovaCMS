import { Alert } from '../collection.js'
const alertQuery = Alert.createQuery('getAlert', {
    alerts: {
        $filter({ filters, options, params }) {
            //filters.visible = true;
            console.log(params.alertId)
            filters._id = params.alertId;
        },
        message: 1,
        userName: 1,
        date: 1,
        user: {
            name: 1,
        }
    }
})
export default alertQuery
