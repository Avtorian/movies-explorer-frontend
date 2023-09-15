export default function countingDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    if (hours !== 0 && minutes !== 0) {
        return `${hours}ч ${minutes}м`
    }
    else if (minutes !== 0) {
        return `${minutes}м`
    }
    else if (hours !== 0) {
        return `${hours}ч`
    }
}