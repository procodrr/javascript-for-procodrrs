const myDate1 = new Date('2024/12/10 10:05:15.06')
const myDate2 = new Date('10 Dec 2024 10:05:15.06')

const myDate = new Date()

console.log(myDate)
console.log(myDate.toLocaleTimeString('en', { timeStyle: 'full' }))
console.log(myDate.toLocaleTimeString('en', { timeStyle: 'long' }))
console.log(myDate.toLocaleTimeString('en', { timeStyle: 'medium' }))
console.log(myDate.toLocaleTimeString('en', { timeStyle: 'short' }))

console.log(myDate.toLocaleDateString('en-GB'))
console.log(myDate.toLocaleDateString('en-GB', { dateStyle: 'full' }))
console.log(myDate.toLocaleDateString('en-GB', { dateStyle: 'long' }))
console.log(myDate.toLocaleDateString('en-GB', { dateStyle: 'medium' }))
console.log(myDate.toLocaleDateString('en-GB', { dateStyle: 'short' }))

function getFullDayName(date) {
  return date.toLocaleDateString('en-GB', { weekday: 'long' })
}

function getFullMonthName(date) {
  return date.toLocaleDateString('en-GB', { month: 'long' })
}
