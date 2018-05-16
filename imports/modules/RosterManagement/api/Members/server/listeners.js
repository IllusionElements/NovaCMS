import { MemberStore, Events, XboxLiveAPIService } from '../events'

/* global Security, BackgroundCheckerService, ErrorLogService */
const checkBackground = async member => {
  const bg = await BackgroundCheckerService
    .checkFriends(member.friendsList)
  return Security.notify(member.gamertag, bg)
}
const Actions = {}

Actions.insert = ({ gamertag }) => XboxLiveAPIService
  .getFriends(gamertag)
  .then(checkBackground)
  .catch(ErrorLogService.logError)

MemberStore.subscribe(Events.MEMBER_INSERT, Actions.insert)

MemberStore.subscribe(Events.MEMBER_INSERTED, () => {})
