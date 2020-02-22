export function formatDate(time) {
    if (!time) return ''
    let date = new Date(time)
    return date.getFullYear() + '-' + padZero(date.getMonth() + 1)+ '-' + padZero(date.getDate())
        + ' ' + padZero(date.getHours()) + ':' + padZero(date.getMinutes()) + ':' + padZero(date.getSeconds())
}

function padZero(num) {
    if (!num) return ''
    return (num > 9)? num: '0'+num
}