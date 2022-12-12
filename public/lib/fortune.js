const fortunes = [
    "message1",
    "message2",
    "message3",
    "message4",
    "message5"
]

exports.getFortune = () => {
    const idx = Math.floor(Math.random() * fortunes.length)
    return fortunes[idx]
}
