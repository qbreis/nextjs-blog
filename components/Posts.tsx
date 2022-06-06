import Link from 'next/link';
import Date from '../components/Date';

const Posts = ({posts}: any) => {
    return (
    <>
        <ul>
        {posts.map(({ id, date, title }: any) => (
            <li key={id}>
            <Link href={`/posts/${id}`}>
                <a>{title}</a>
            </Link>
            <small>
                <Date dateString={date} />
            </small>
            </li>
        ))}
        </ul>
    </>
    );
}

export default Posts;