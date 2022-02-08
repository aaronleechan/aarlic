
export const readableDateFunction: Function = (date: string)=>{
    let readingDate = new Date(date).toLocaleDateString('en-US',{
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    return readingDate;
}