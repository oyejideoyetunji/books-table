export function getDashSeparatedDate(date) {
    return new Date(date).toLocaleDateString("fr-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    })
}