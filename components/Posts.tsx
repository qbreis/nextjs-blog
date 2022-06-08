import Link from 'next/link';
import Date from '../components/Date';

const Posts = ({posts}: any) => {
    return (
        <ul>
            {posts.map(({ id, date, title }: any) => (
                <li key={id}>
                    <h2 className="h4">
                        <Link href={`/posts/${id}`}>
                            <a>{title}</a>
                        </Link>
                    </h2>
                    <Date dateString={date} />
                </li>
            ))}
        </ul>
    );
}

export default Posts;