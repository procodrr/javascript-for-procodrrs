const myDate = new Date()

const isoDate = '2024-03-06T18:23:06.682Z'

console.log('Local Date: ', myDate.toString())
console.log('UTC Date: ', myDate.toUTCString())

// console.log(myDate)
// console.log('Local Year', myDate.getFullYear())
// console.log('UTC Year', myDate.getUTCFullYear())
// console.log('Local Month', myDate.getMonth() + 1)
// console.log('UTC Month', myDate.getUTCMonth() + 1)
// console.log('Local Date', myDate.getDate())
// console.log('UTC Date', myDate.getUTCDate())
// console.log('Local Day', myDate.getDay())
// console.log('UTC Day', myDate.getUTCDay())
// console.log('Local Hours', myDate.getHours())
// console.log('UTC Hours', myDate.getUTCHours())
// console.log('Local Minutes', myDate.getMinutes())
// console.log('UTC Minutes', myDate.getUTCMinutes())
// console.log('Local Seconds', myDate.getSeconds())
// console.log('UTC Seconds', myDate.getUTCSeconds())
// console.log('Local Milli Seconds', myDate.getMilliseconds())
// console.log('UTC Milli Seconds', myDate.getUTCMilliseconds())
console.log(myDate.getTime())
console.log(Date.now())

// console.log('Time Zone Offset', myDate.getTimezoneOffset() / -60)
// console.log(myDate.toISOString())
// console.log(myDate.toString())

// console.log(myDate.toLocaleString('en-GB', { hour12: true }))
// console.log(myDate.toLocaleDateString('en-GB'))
// console.log(myDate.toJSON())
