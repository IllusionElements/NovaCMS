import { SquadManagementService, SquadService } from '../services/SquadService.js'
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { callPromiseMixin, validationMixin } from 'imports/utils/mixins'
import { SquadSchema } from '../../../db/Squads/schema.js'
import Security from 'imports/api/Security'
const DefaultValidatedMethod = ({ name, run, ...rest }) => ValidatedMethod({
  name: `squad.${name}`,
  mixins: [callPromiseMixin, validationMixin],
  run,
})
const addMixins = (...args) => (...mixins) => ''
@addMixins(callPromiseMixin, validationMixin)
class ValidatedMethodSquad {
  name = 'squad.insert'

  validate = this.schema.validate()

  run(squad) {
    check(squad, Object)
    Security.isLoggedIn(this.userID)
    Security.userHasPermission(this.userID, 'createSquad')
    return SquadService.createSquad(this.userID, squad)
  }
}

const createSquadMethod = new ValidatedMethodSquad({
  schema: SquadSchema,
})

export const createNewSquad = new ValidatedMethod(createSquadMethod)

