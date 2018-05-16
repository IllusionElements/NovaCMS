import faker from 'faker'

const MemberFactory = (n, games) => ({
  gamertag: `${faker.random.arrayElement(['NGC ', ''])}${faker.internet.userName()}${faker.random.arrayElement([' 7', ''])}`,
  rankId: faker.random.arrayElement(n),
  recruitedBy: faker.internet.userName(),
  dateAdded: faker.date.past(),
  division: {
    name: 'Divine Heroes',
    squad: 'Achilles',
  },
  background: {
    friendsListStatus: faker.random.arrayElement(['Closed', 'Open']),
  },
  gametype: faker.random.arrayElement(games),
  description: faker.random.words(),
})

export default MemberFactory
