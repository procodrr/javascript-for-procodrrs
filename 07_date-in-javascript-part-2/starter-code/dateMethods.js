const myDate = new Date()
console.log(myDate)

// Local get methods
console.log('Local Year', myDate.getFullYear())
console.log('Local Month', myDate.getMonth())
console.log('Local Date', myDate.getDate())
console.log('Local Day', myDate.getDay())
console.log('Local Hours', myDate.getHours())
console.log('Local Minutes', myDate.getMinutes())
console.log('Local Seconds', myDate.getSeconds())
console.log('Local Milliseconds', myDate.getMilliseconds())
console.log('Local Year - 1900', myDate.getYear()) // Deprecated

// UTC get methods
console.log('UTC Year', myDate.getUTCFullYear())
console.log('UTC Month', myDate.getUTCMonth())
console.log('UTC Date', myDate.getUTCDate())
console.log('UTC Day', myDate.getUTCDay())
console.log('UTC Hours', myDate.getUTCHours())
console.log('UTC Minutes', myDate.getUTCMinutes())
console.log('UTC Seconds', myDate.getUTCSeconds())
console.log('UTC Milliseconds', myDate.getUTCMilliseconds())

// Other get methods
console.log('Timestamp in Milliseconds', myDate.getTime())
console.log('Time Zone Offset in Minutes', myDate.getTimezoneOffset())

// to methods without arguments
console.log('toString: ', myDate.toString())
console.log('toUTCString: ', myDate.toUTCString())
console.log('toISOString: ', myDate.toISOString())
console.log('toJSON: ', myDate.toJSON())
console.log('toDateString: ', myDate.toDateString())
console.log('toTimeString: ', myDate.toTimeString())

// to methods with arguments
console.log('toLocaleString: ', myDate.toLocaleString())
console.log('toLocaleDateString: ', myDate.toLocaleDateString())
console.log('toLocaleTimeString: ', myDate.toLocaleTimeString())

// Local set methods
myDate.setFullYear(2014)
myDate.setMonth(10)
myDate.setDate(5)
myDate.setHours(20)
myDate.setMinutes(12)
myDate.setSeconds(10)
myDate.setMilliseconds(60)
myDate.setTime(1709802054158)
myDate.setYear(2024) // Deprecated

// UTC set methods
myDate.setUTCFullYear(2014)
myDate.setUTCMonth(10)
myDate.setUTCDate(5)
myDate.setUTCHours(20)
myDate.setUTCMinutes(12)
myDate.setUTCSeconds(10)
myDate.setUTCMilliseconds(60)

// static methods
console.log(Date.now())
console.log(Date.parse('04 Dec 1995 00:12:00 GMT'))
console.log(Date.UTC())

// other methods
console.log(myDate.valueOf())
