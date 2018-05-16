import { Ranks } from '/imports/db/Ranks/collection.js';

const RANKS = {
  fixtures: [
    { rankID: 1, rankName: 'Private', abbr: 'PVT' },
    { rankID: 2, rankName: 'Corporal', abbr: 'CPL' },
    { rankID: 3, rankName: 'Sergeant', abbr: 'SGT' },
    { rankID: 4, rankName: 'Staff Sergeant', abbr: 'SSGT' },
    { rankID: 5, rankName: 'Master Sergeant', abbr: 'MSGT' },
    { rankID: 6, rankName: 'Lieutenant', abbr: 'LT' },
    { rankID: 7, rankName: 'Captain', abbr: 'CPT' },
    { rankID: 8, rankName: 'Colonel', abbr: 'COL' },
    { rankID: 9, rankName: 'General', abbr: 'GEN' },
    { rankID: 10, rankName: 'Co-Founder', abbr: 'COFO' },
    { rankID: 11, rankName: 'Founder', abbr: 'FDR' },
    { rankID: 12, rankName: 'Co-Division Leader', abbr: 'CDL' },
    { rankID: 13, rankName: 'Division Leader', abbr: ' DL' },
    { rankID: 14, rankName: 'Director', abbr: 'DIR' },
    { rankID: 15, rankName: 'Senior Director', abbr: 'SNR DIR' },
    { rankID: 16, rankName: 'Department Staff', abbr: 'STAFF' },
    { rankID: 17, rankName: 'Board of Directors', abbr: 'BOD' },
    { rankID: 18, rankName: 'Creators', abbr: 'CTR' },
  ],
  //schema: ,
};
if (!Meteor.isDevelopment) {
  Meteor.startup(() => {
    Ranks._ensureIndex({ rankID: 1 });
    RANKS.fixtures.forEach(fixture => Ranks.insert(fixture));
  });
}
