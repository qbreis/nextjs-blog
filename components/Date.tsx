import { parseISO, format } from 'date-fns';

export default function Date({ dateString }: any) {
  const date = parseISO(dateString);
  //return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
  return (
    <span className="posted-on">
      <time className="entry-date published" dateTime={dateString}>{dateString}</time>
    </span>
  )
}
