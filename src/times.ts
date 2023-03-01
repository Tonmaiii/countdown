import { times } from './util'

export const cuds = {
    offset: (t: number) => t * 4.2883e-7 - 688500,
    timezone: 7,
    times: times([
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
}
