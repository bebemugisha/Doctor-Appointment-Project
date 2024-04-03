const convertTime = (time) => {
  // timepart will return an array//

  const timeParts = time.split(':')
  let hours = parseInt(timeParts[0])
  const minutes = parseInt(timeParts[1])

  let meridien = 'am'

  if (hours >= 12) {
    meridien = 'pm'

    if (hours > 12) {
      hours -= 12
    }
  }

  return (
    hours.toString().padStart(2) + ':'+
    minutes.toString().padStart(2, '0') +
    '' +
    meridien
  )
}

export default convertTime;
