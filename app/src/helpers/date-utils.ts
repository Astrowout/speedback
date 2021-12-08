import { formatRelative } from 'date-fns';

const DateUtils: {[key: string]: (props?: any) => string} = {};

DateUtils.formatRelative = (date: Date): string => {
	return formatRelative(date, new Date());
}

export default DateUtils;
