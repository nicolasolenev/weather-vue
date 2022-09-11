import { format } from 'date-fns';

export const getTime = (ms = 0) => format(new Date(ms * 1000), 'HH:mm');
export const getDay = (ms = 0) => format(new Date(ms * 1000), 'd LLL');
