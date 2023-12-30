import { dateFunc } from '@/utils/date';

test('thisYear function returns the current year as a string', () => {
  const currentYear = new Date().getFullYear().toString();
  expect(dateFunc.thisYear()).toBe(currentYear);
});
