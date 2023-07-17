(async function iife() {
var UNSUBSCRIBE_DELAY_TIME = 100
var runAfterDelay = (fn, delay) => new Promise((resolve, reject) => {
setTimeout(() => {
fn()
resolve()
}, delay)
})
var channels = Array.from(document.getElementsByTagName(`ytd-channel-renderer`))
console.log(`${channels.length} channels found.`)
var ctr = 0
for (const channel of channels) {
channel.querySelector(`[aria-label^='Unsubscribe from']`).click()
await runAfterDelay(() => {
document.getElementsByTagName(`yt-confirm-dialog-renderer`)[0] .querySelector(`[aria-label^='Unsubscribe']`)
.click()
console.log(`Unsubsribed ${ctr + 1}/${channels.length}`)
ctr++
}, UNSUBSCRIBE_DELAY_TIME)
}
})()