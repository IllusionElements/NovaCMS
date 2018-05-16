import extendSchema from '@novacms/extendschema'

const composeSchema = extendSchema({
  reason: {
    type: String,
    label: 'Blacklist Reason',
  },
  type: {
    type: String,
    label: 'type of blacklist/dnh/mr',
    allowedValues: [
      'Blacklisted',
      'Squad DNH',
      'Division DNH',
      'DNH',
      'Membership Revoked',
    ],
  },
  blkauth: {
    type: String,
    label: 'leader who authorized blacklist',
  },
  date: {
    type: Date,
    label: 'Date Blacklisted',
  },
  blId: {
    type: Number,
    label: 'blacklist id',
  },
})

export default composeSchema
