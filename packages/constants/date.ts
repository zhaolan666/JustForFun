// 日期和星期常量
export const datePickTypes = [
  'year',
  'month',
  'date',
  'dates',
  'week',
  'datetime',
  'datetimerange',
  'daterange',
  'monthrange',
] as const

export const WEEK_DAYS = [
  'sun',
  'mon',
  'tue',
  'wed',
  'thu',
  'fri',
  'sat',
] as const

export type DatePickType = typeof datePickTypes[number]
