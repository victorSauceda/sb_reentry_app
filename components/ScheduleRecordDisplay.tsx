import useLanguage from '../hooks/useLanguage'

import { ScheduleRecord } from '../types/records'
import { CopyHolder, Language } from '../types/language'

import styles from './ScheduleRecordDisplay.module.css'

const copy: CopyHolder = {
  english: {
    timeOpen: 'Time Open',
    to: ' to ',
    daysOpen: 'Days Open',
    notes: 'Notes',
    everyWeek: 'Open Every Week',
    first: 'First',
    second: 'Second',
    third: 'Third',
    fourth: 'Fourth',
    fifth: 'Fifth',
    week: 'week',
    ofMonth: 'of the month.',
  },
  spanish: {
    timeOpen: 'Tiempo Abierto',
    to: ' a ',
    daysOpen: 'Dia Abierto',
    notes: 'Notas',
    everyWeek: 'Abierto Todas Las Semanas',
    first: 'Primero',
    second: 'Segundo',
    third: 'Tercero',
    fourth: 'Cuarto',
    fifth: 'Quinto',
    week: 'semana',
    ofMonth: 'del mes.',
  },
}

const ordinalParser = (
  days: string,
  langOption: { language: Language },
): string => {
  const { language } = langOption
  const activeCopy = copy[language]
  const {
    everyWeek,
    first,
    second,
    third,
    fourth,
    fifth,
    week,
    ofMonth,
  } = activeCopy
  return days === '1, 2, 3, 4, 5'
    ? everyWeek
    : `Open ${days
        .replace('1', first)
        .replace('2', second)
        .replace('3', third)
        .replace('4', fourth)
        .replace('5', fifth)} ${week}${days.length > 1 && 's'} ${ofMonth}.`
}

const timeParser = (timeStr: string): string => {
  const splitTime: Array<string | number> = timeStr.split(':')
  splitTime[0] = +splitTime[0]
  const amOrPm: string = splitTime[0] > 11 && splitTime[0] < 24 ? 'PM' : 'AM'
  if (!splitTime[0] || splitTime[0] === 12) splitTime[0] = '12'
  else if (splitTime[0] > 12) splitTime[0] = String(splitTime[0] - 12)
  return `${splitTime[0]}:${splitTime[1]} ${amOrPm}`
}

interface ScheduleRecordDisplayProps {
  scheduleInfo: ScheduleRecord
}

const ScheduleRecordDisplay = ({
  scheduleInfo,
}: ScheduleRecordDisplayProps) => {
  const { language } = useLanguage()
  const activeCopy = copy[language]

  const { open_time, close_time, day, ordinal_open, notes } = scheduleInfo

  return (
    <section className={styles.ScheduleRecordDisplay}>
      {open_time && close_time && (
        <p>
          {activeCopy.timeOpen}: {timeParser(open_time)}
          {activeCopy.to}
          {timeParser(close_time)}
        </p>
      )}
      {day && (
        <p>
          {`Day${day.length > 3 ? 's' : ''}`} {activeCopy.daysOpen}: {day}
        </p>
      )}
      {ordinal_open && <p>{ordinalParser(ordinal_open, { language })}</p>}
      {notes && (
        <p>
          {activeCopy.daysOpen}: {notes}
        </p>
      )}
    </section>
  )
}

export default ScheduleRecordDisplay
