import MemberServiceModel from '../../services/MemberServiceModel.js'
import { assert, expect } from 'chai'
import testData from './testData.js'
import { resetDatabase } from 'meteor/xolvio:cleaner'

describe('Member Service', function () {
  const Members = new MemberServiceModel()
  const memberMock = {}
  describe('add new member', function () {
    //passing
    it('should add a new member to db', function () {
      const insertFunction = Members.insertMember(memberMock);
      expect(() => insertFunction).to.not.throw() &&
        assert(Members.insertMember(memberMock)).equals(true);
    });
    //failing
    it('should throw an error', function () {
      assert.throws(() => Members.insertMember({}), Error, '')
    });
  })

  describe('delete a member', function () {
    it('should throw an error', function () {
      assert.throw(() => Members.removeMember(), Error, 'not authorized');
    })

    it('should be successful', function () {
      expect(() => Members.removeMember()).to.not.throw() &&
        assert(Members.removeMember(memberMock._id)).equals(true);
    })
  })

  describe(`set a members' background`, function () {
    it('should throw an error', function () {
      assert.throw(() => Members.removeMember(), Error, 'not authorized');
    })

    it('should be successful', function () {
      expect(() => Members.removeMember()).to.not.throw() &&
        assert(Members.removeMember(memberMock._id)).equals(true);
    })
  })

  describe('change a members rank', function () {
    it('should throw an error', function () {
      assert.throw(() => Members.removeMember(), Error, 'not authorized');
    })

    it('should be successful', function () {
      expect(() => Members.removeMember()).to.not.throw() &&
        assert(Members.removeMember(memberMock._id)).equals(true);
    })
  })

  describe('get a members friendslist')
  describe('check a members background', function () {
    it('should return a warning', function () {})
    it('should return a open friendslist')
    it('should notify division staff & admins of blacklisted member on friendslist')
  })
  describe()
})
