function msgAfterTimeout (msg, who, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
    })
}

console.log('antes')
msgAfterTimeout("", "Foo", 100).then((msg) =>
    {
        console.log('primera vez')
        return msgAfterTimeout(msg, "Bar", 200)
    }
).then((msg) => {
    console.log(`done after 300ms:${msg}`)
})
console.log('despues')