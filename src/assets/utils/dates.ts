import { formatDistance } from 'date-fns'


export const formatDateRelative = (date: number | string) => {
    let parsed = date
    if (typeof parsed === 'string') {
      parsed = Number.parseInt(parsed)
    }
    return formatDistance(parsed, new Date(), {
      addSuffix: true,
    })
  }
  