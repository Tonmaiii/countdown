const second = 1000
const minute = 60 * second
const hour = 60 * minute
const day = 24 * hour

export const display = ({
    times,
    offset,
    timezone
}: {
    times: number[]
    offset: (t: number) => number
    timezone: number
}) => {
    const t = Date.now()
    const now = (t - offset(t) + timezone * hour - second) % day
    const next = times.find((time: number) => time > now) ?? times[0] + day
    const countdown = next - now
    const seconds = Math.floor(countdown / 1000)
    if (seconds < 60) return `${seconds}`
    return `${Math.floor(seconds / 60)}:${`${seconds % 60}`.padStart(2, '0')}`
}

export const time = (h: number, m: number = 0, s: number = 0) =>
    h * hour + m * minute + s * second

export const times = (times: string[]) =>
    times.map(s => {
        const match = s.match(/(\d\d?):(\d\d)(?::(\d\d))?/)
        if (!match) throw new Error(`Invalid time: "${s}"`)
        const hour = parseInt(match[1])
        const minute = parseInt(match[2])
        const second = match[3] ? parseInt(match[3]) : 0
        if (hour >= 24) throw new Error(`Hour must be less than 24`)
        if (minute >= 60) throw new Error(`Minute must be less than 60`)
        if (second >= 60) throw new Error(`Second must be less than 60`)
        return time(hour, minute, second)
    })
