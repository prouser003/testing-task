export const getDateString = (date: string): string => {
    const parsedDate = new Date(date)
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${month[parsedDate.getMonth()]} ${parsedDate.getDate()}, ${parsedDate.getFullYear()}`
}