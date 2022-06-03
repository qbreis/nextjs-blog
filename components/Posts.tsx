import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';
import Date from '../components/Date';

const Posts = ({posts}: any) => {
    return (
    <>
        <ul className={utilStyles.list}>
        {posts.map(({ id, date, title }: any) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
                <a>{title}</a>
            </Link>
            <small className={utilStyles.lightText}>
                <Date dateString={date} />
            </small>
            </li>
        ))}
        </ul>
    </>
    );
}

export default Posts;