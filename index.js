const label = document.querySelector('#label')
let now = 0
const time = (hour, minute) => (hour * 60 + minute) * 60 * 1000

const times = [
    time(7, 45),
    time(7, 50),
    time(8, 30),
    time(9, 20),
    time(10, 10),
    time(10, 20),
    time(11, 10),
    time(12, 00),
    time(12, 50),
    time(13, 40),
    time(13, 50),
    time(14, 40),
    time(15, 30),
    time(16, 20),
    time(17, 10),
    time(18, 00),
    time(24 + 7, 45)
]
const offset = 28000

const callback = () => {
    requestAnimationFrame(callback)

    const now =
        (Date.now() - offset + 7 * 3600 * 1000 - 1000) % (24 * 60 * 60 * 1000)
    let next
    for (let i = 0; i < times.length; i++) {
        if (times[i] > now) {
            next = times[i]
            break
        }
    }
    next = next ?? times[times.length - 1]
    const countdown = next - now - 1
    const seconds = Math.floor(countdown / 1000)
    if (seconds >= 60) {
        label.textContent = `${Math.floor(seconds / 60)}:${`${
            seconds % 60
        }`.padStart(2, '0')}`
    } else {
        label.textContent = seconds
    }
}

requestAnimationFrame(callback)
