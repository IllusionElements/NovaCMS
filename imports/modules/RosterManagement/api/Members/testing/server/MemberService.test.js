import { assert, expect } from 'chai'
//import { Security } from '/imports/api/security';
import { check, Match } from 'meteor/check'
import { getMockDoc } from 'simpl-schema-mockdoc'
import { MemberSchema } from '../../../../db/Members/schema.js'
import { resetDatabase } from 'meteor/xolvio:cleaner'
import * as Event from '../../events'
import * as db from '../../../../db/'
import { MemberData } from '/imports/fixtures/RosterManagement/Members'
import { MemberServiceModel } from '../../services/MemberServiceModel.js'
import StubCollection from 'meteor/hwillson:stub-collections'
import sinon from 'sinon';

StubCollection.add([db.Members])

describe('Member Service', function () {
  const Data = new Map();
  const Events = Event.default
  //console.log(Security)
  const store = sinon.stub(Events.MemberStore);
  //const Sec = sinon.spy(() => sinon.stub(Security));

  before(() => StubCollection.stub())
  after(() => {
    Members.dropData(MemberData);
    resetDatabase(null, (res) => console.log(res));
    StubCollection.restore()
  })

  const Security = {
    name: 'Security',
    isAdmin: true,
    isLoggedIn: true,
    isSquadGeneral: true,
  }
  const Members = new MemberServiceModel({
    services: [Security],
    collections: [
      ['Members', db.Members],
      ['DeletedMembers', { insert() {} }]
    ],
    Event: {
      Emitter: store,
      events: Events.MemberEvents,
    }
  })
  const memberMock = {}
  describe('add new member', function () {
      //passing
      it('should add a new member to db', function () {
        expect(function (data) {
          MemberData.forEach((member) => !Members._getMember(member) && Members.insertMember({ userId: 1, memberData: member }), true)
        }).to.not.throw()
      });
      //failing
      it('should throw an error', function () {
        assert.throws(() => Members.insertMember({}), Error, '')
      });

      it('should throw a duplicate entry error', () => {
        assert.throws(() => Members.insertMember({ userId: 1, memberData: MemberData[3] }, false), Error, `duplicate entry for ${MemberData[3].gamertag}`)
      })
    }),


    describe('delete a member', function () {
      it('should throw an error', function () {
        assert.throw(() => Members.deleteEntry(), Error);
      })

      it('should be successful', function () {
        expect(function () {
          MemberData.slice(0, 5).forEach((member) => Members.deleteEntry(member))


        }).to.not.throw()
      })
    })

  describe(`set a members' background`, function () {
    it('should throw an error', function () {
      assert.throw(() => Members.removeMember(), Error);
    })

    it('should be successful', function () {
      expect(() => Members.removeMember()).to.not.throw() &&
        assert(Members.removeMember(memberMock._id)).equals(true);
    })
  })

  describe('change a members rank', function () {
    it('should throw an error', function () {
      assert.throw(() => Members.removeMember(), Error);
    })

    it('should be successful', function () {
      expect(() => Members.removeMember()).to.not.throw() &&
        assert(Members.removeMember(memberMock._id)).equals(true);
    })
  })

  describe('get a members friendslist', function () {

  });
  describe('check a members background', function () {
    const badList = [];
    const memberconstructor = {
      good: {
        friendsList: {
          status: 'open',
          friends: [],
        }
      },
      bad: {
        open: {
          status: 'open',
          friends: [{ name: 'XGN' }, { name: 'sam' }]
        },
        closed: {
          friendsList: {
            status: 'blocked',
            friends: { error: '404' },
          }
        }
      }
    }
    it('should throw an error', function () {
      assert.throw(() => Members.checkBackground(badList), Error)
    })

    it('should return a open friendslist', function () {
      assert.equal(Members.checkBackground(memberconstructor.good), 'no blacklisted friends')
    })
    it('should notify division staff & admins of blacklisted member on friendslist', () => true)
    describe('checking backgrounds of Members that should throw errors for blocked & bl members',
      function () {
        it('should throw an error with array', function () {
          expect(() => Members.checkBackground({ friendsList: memberconstructor.bad.open })).to.throw();
        })
        it('should throw an error', function () {
          expect(() => Members.checkBackground(memberconstructor.bad.closed)).to.throw();
        })
      })

  })

})
