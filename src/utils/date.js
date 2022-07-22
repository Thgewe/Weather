const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

export const getDayOfWeekByDate = (date) => {
    const day = new Date(date).getDay();
    return week[day]
}

export const getDayOfWeekByNumber = (number) => {
    return week[number]
}

export const getDayOfWeekByDateAndNumber = (date) => {
    const day = new Date(date).getDay();
    
    return (number) => {
        let i = day + number;
        if (i > 6) {
            i -= 7;
        }
        return week[i]
    }
}
