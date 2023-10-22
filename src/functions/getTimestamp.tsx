function getTimestamp(timestamp: string, use24hrFormat: boolean) {
  const date = new Date(timestamp);
  const currentDate = new Date();
  const yesterday = new Date(currentDate);

  yesterday.setDate(currentDate.getDate() - 1);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formatTime = (hours: number, minutes: number) => {
    if (use24hrFormat) {
      return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    } else {
      const amOrPm = hours >= 12 ? 'PM' : 'AM';
      const displayHours = use24hrFormat ? hours : hours % 12 || 12;
      return `${displayHours}:${minutes < 10 ? '0' : ''}${minutes} ${amOrPm}`;
    }
  };

  if (date.toDateString() === currentDate.toDateString()) {
    return `Today at ${formatTime(hours, minutes)}`;
  } else if (date.toDateString() === yesterday.toDateString()) {
    return `Yesterday at ${formatTime(hours, minutes)}`;
  } else {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}/${day}/${year} ${formatTime(hours, minutes)}`;
  }
}

export default getTimestamp;

// ty chatgpt <3