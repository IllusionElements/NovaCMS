//schema def for Squad Collection
//import { composeRosterSchema } from '/imports/db/defaultSchemas/roster.js'
import SimpleSchema from 'simpl-schema'
import faker from 'faker';
const extendSchema = (object = {}) => (obj = {}) => Object.assign({}, object, obj)

const createMetadata = ({ createdBy, dateCreated = Date.now() } = {}) => ({
  createdBy,
  dateCreated
});

const squadData = ({ name, visible = true } = {}, [...gametype]) => ({
  name,
  visible,
  limit: faker.random.number(150),
  gametype: faker.random.arrayElement(gametype)
});
const $quad = squadData({
  name: faker.internet.userName()
}, ['CoD:WWII', 'Bf2', 'fornite', 'PUBG', 'CoD XVI', 'TC: RSS', "Tom Clancy's Ghost Recon", "HearthStone"])

const NovaSquad = {
  divisionId: faker.random.uuid(),
  members: Array($quad.limit).fill(0).map(() => faker.userCard()),
}

export const SquadFixture = {
  ...$quad,
  ...NovaSquad,
  ...createMetadata({
    createdBy: faker.internet.userName(),
  })
}
