const label = document.querySelector('#label')

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
const offset = 22000

const callback = () => {
    requestAnimationFrame(callback)

    const now = (Date.now() - offset) % (24 * 60 * 60 * 1000)
    let next
    for (let i = 1; i < times.length; i++) {
        if (times[i] > now) {
            next = times[i - 1]
        }
    }
    next = next ?? times[times.length - 1]
    const countdown = next - now
    label.textContent = `${Math.floor(countdown / 60000)}:${`${
        Math.floor(countdown / 1000) % 60
    }`.padStart(2, '0')}`
}

requestAnimationFrame(callback)
