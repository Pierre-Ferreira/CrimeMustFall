// Global function to create a display time.
export default function(isoDate) {
    let minutes = (isoDate.getMinutes().toString().length === 1)
                  ? '0'+isoDate.getMinutes().toString()
                  : isoDate.getMinutes().toString()
    let hours = (isoDate.getHours().toString().length === 1)
                  ? '0'+isoDate.getHours().toString()
                  : isoDate.getHours().toString()
    return `${hours}:${minutes}`
}
