import { dayOrder } from '../constants/scheduler';

export default (schedule) => {
  return schedule.sort((a, b) => {
    if (dayOrder[a.day] !== dayOrder[b.day]) {
      return dayOrder[a.day] - dayOrder[b.day];
    }
    const aTimeArr = a.time.split(':');
    const bTimeArr = b.time.split(':');
    return aTimeArr[0] - bTimeArr[0] || aTimeArr[1] - bTimeArr[1];
  });
};
