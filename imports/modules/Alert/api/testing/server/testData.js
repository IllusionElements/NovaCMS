import md5 from 'md5'

const composeDate = (n) => {
  const time = n.constructor.name === 'Date' ? n : Date(n)
  const UTC = new Date(time)
  return UTC
}

const testData = {
  userId: md5(composeDate(Date.now())),
  message: {
    title: 'embrace proactive supply-chains',
    body: 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
  },
  date: {
    onCreated: composeDate('1522095232'),
    expiry: composeDate('1526956699'),
  },
  visible: true,
}

const test = JSON.stringify(testData)
console.log(testData)
export default testData
