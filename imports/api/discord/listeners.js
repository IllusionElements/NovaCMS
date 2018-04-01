import { AlertEmitter, AlertEvents } from '/imports/api/alert/server/events/AlertActions.js'
import { getAlert } from '...'
import { notifyDiscord, sendText, sendEmail } from '...'

AlertEmitter.on(AlertEvents.onCreated, async({ alertId }) => {
  const alert = await getAlert({ alertId });
  const { notify } = alert

  if (notify.discord) notifyDiscord(alert)
  if (notify.text) sendText(alert)
  if (notify.email) sendEmail(alert)

})
