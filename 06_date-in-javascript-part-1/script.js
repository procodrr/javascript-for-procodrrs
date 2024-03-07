const user1DOB = '02/04/2000'
const user2DOB = '03-06-1998'
const isoString = '2000-04-02T12:00:00.300Z'

const timeStampDat = new Date(23)
// DD/MM/YYYY Not Accepted
// MM/DD/YYYY or YYYY/MM/DD Accepted
const user1Date = new Date(user1DOB.split('/').reverse().join('/'))
const user2Date = new Date(user2DOB.split('-').reverse().join('-'))
const user3DOB = new Date(isoString)

// const user4DOB = new Date(2000, 11, 12, 4, 30, 15, 600)

const [day, month, year] = user1DOB.split('/').map((el) => +el)

const user4DOB = new Date(year, month - 1, day)

console.log(user4DOB)

// console.log(user4DOB.toString())
// console.log(user4DOB.getMilliseconds())
