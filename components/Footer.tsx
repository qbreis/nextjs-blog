import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer has-text-centered site-footer color-text-screen">
            <p>
                Si alguien quiere ponerse en contacto conmigo puede hacerlo a través de <Link
                    href='https://es.linkedin.com/in/enricgatell'
                >
                    <a target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </Link> o <Link
                    href='https://github.com/qbreis/nextjs-blog/issues'
                >
                    <a target="_blank" rel="noopener noreferrer">GitHub</a>
                </Link> (new issue).
            </p>
            <ul className="contact-links">
                <li>
                    <Link
                        href='https://es.linkedin.com/in/enricgatell'
                    >
                        <a target="_blank" rel="noopener noreferrer">
                            <Image
                                priority
                                src="/images/logo-linkedin.svg"
                                height={60}
                                width={60}
                                alt="LinkedIn"
                            />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link
                    href='https://github.com/qbreis/nextjs-blog'
                    >
                        <a target="_blank" rel="noopener noreferrer">
                            <Image
                                priority
                                src="/images/logo-github-black.svg"
                                height={60}
                                width={60}
                                alt="GitHub"
                            />
                        </a>
                    </Link>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;