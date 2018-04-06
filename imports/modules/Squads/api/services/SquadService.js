import { Security } from '../../../../../api';
import { MemberStore, MemberEvents } from './events'
import { Members, DeletedMembers } from '../db'
import { MemberService } from '../../modules/Members/api/service/MemberService.js'
//TO-DO: CREATE & IMPORT FUNCTIONS
export class SquadService {

  constructor({ sid, userId }) {
    this.squad = SquadService._getSquad(sid);
    this.userId = userId;
  }

  addMemberToSquad() {}

  removeMemberFromSquad() {}

  editMemberRank() {}

  getMemberList() {
    const { members } = this.squad;
    const ranks = Ranks
      .createQuery()
      .getRankObject();

    return members.reduce((rankList, member) => {
      const rank = rankList[member.rank];
      rankList[member.rank] = [...rank, member];

      return rankList;
    }, ranks)
  }

  static _getSquad(sid) {}

}


let Ranks = 8
