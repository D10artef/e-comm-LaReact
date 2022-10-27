export function isToday(dateParams) {
    const now = new Date();
    const date = new Date(dateParams);
    return now.toDateString() === date.toDateString();
}

export function getDateFormat(dateParams){
  const date = new Date(dateParams)
  // const month = date.toLocaleString('default', { month:'short' })
  // const day = date.toLocaleString("default", { day:'2-digit' });
  // const year = date.toLocaleString("default", {year: 'numeric'})
  if(isToday(dateParams)){
    return 'Today'
  }
  const options = {day: '2-digit', year:'numeric', month:'short'}
  const dateString = date.toLocaleDateString('default', options)
  return dateString
}