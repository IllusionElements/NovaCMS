import { Squads } from '../collection.js'

export const Count = {
  body: {
    _id: 1,
  },
  reduce(squad) {
    const link = Squads.getLink(squad, 'members')

    return link.find().count()
  },
}
