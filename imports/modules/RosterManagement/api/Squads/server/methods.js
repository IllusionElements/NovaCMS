import { ValidatedMethod } from 'meteor/mdg:validated-method'
import check from 'meteor/check'
import { callPromiseMixin, validationMixin } from '@novacms/mixins'
import Security from 'imports/api/Security'
import { SquadSchema } from '../../../db/Squads/schema.js'
import { SquadManagementService, SquadService } from '../services/SquadService.js'

const addMixins = (...mixins) => target => (
  mixins.forEach((Mixin) => {
    const { mixin } = target || []
    target.mixin = mixin.concat(Mixin) // eslint-disable-line
  })
)
@addMixins(callPromiseMixin, validationMixin)
class ValidatedMethodSquad {
  name = 'insert'

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

