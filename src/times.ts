import { times } from './util'

const second = 1000
const minute = 60 * second
const hour = 60 * minute
const day = 24 * hour

export const cuds = (t: number) => {
    const offset = t * 4.2883e-7 - 688500
    const timezone = 7
    const timesList = times([
        '7:45',
        '7:50',
        '8:30',
        '9:20',
        '10:10',
        '10:20',
        '11:10',
        '12:00',
        '12:50',
        '13:40',
        '14:30',
        '14:40',
        '15:30',
        '16:20',
        '17:10',
        '18:00'
    ])
    const now = (t - offset + timezone * hour - second) % day
    const next = timesList.find((time: number) => time > now) ?? times[0] + day
    const countdown = next - now
    return countdown
}

export const mwit = (t: number) => {
    const weekDay = new Date().getDay()
    const timezone = 7

    const timesList =
        weekDay === 1 || weekDay === 2
            ? times([
                  '8:30',
                  '9:00',
                  '10:20',
                  '10:30',
                  '11:50',
                  '12:50',
                  '14:10',
                  '14:20',
                  '15:40',
                  '15:50',
                  '17:10',
                  '22:00'
              ])
            : times([
                  '8:00',
                  '8:30',
                  '9:50',
                  '10:00',
                  '11:20',
                  '12:20',
                  '13:40',
                  '13:50',
                  '15:10',
                  '15:20',
                  '16:40',
                  '22:00'
              ])
    const now = (t + timezone * hour - second) % day
    const next = timesList.find((time: number) => time > now) ?? times[0] + day
    const countdown = next - now
    return countdown
}
