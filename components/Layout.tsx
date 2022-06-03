import Head from 'next/head';
import Image from 'next/image';
import styles from './Layout.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';

import { useEffect, useRef } from "react";

const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }: any) {


  



  const rootRef = useRef<HTMLDivElement>(null);

  function highlightCode(pre : any, highlightRanges : any, lineNumberRowsContainer : any) {
    const ranges = highlightRanges.split(",").filter((val: any) => val);
    const preWidth = pre.scrollWidth;

    for (const range of ranges) {
      let [start, end] = range.split("-");
      if (!start || !end) {
        start = range;
        end = range;
      }

      for (let i = +start; i <= +end; i++) {
        const lineNumberSpan: HTMLSpanElement = lineNumberRowsContainer.querySelector(`span:nth-child(${i})`);
        lineNumberSpan.style.setProperty("--highlight-background", "rgba(100, 100, 100, 0.5)");
        lineNumberSpan.style.setProperty("--highlight-width", `${preWidth}px`);
      }
    }
  }
/*
  function createCopyButton(codeEl) {
    const button = document.createElement("button");
    button.classList.add("prism-copy-button");
    button.textContent = "Copy";

    button.addEventListener("click", () => {
      if (button.textContent === "Copied") {
        return;
      }
      navigator.clipboard.writeText(codeEl.textContent || "");
      button.textContent = "Copied";
      button.disabled = true;
      setTimeout(() => {
        button.textContent = "Copy";
        button.disabled = false;
      }, 3000);
    });

    return button;
  }
*/
  useEffect(() => {
    //const allPres = rootRef.current?.querySelectorAll("pre");
    
    foo:HTMLCollection;
    const allPres = [].slice.call(
      rootRef.current?.querySelectorAll("pre")
    );
    allPres:HTMLCollection;

    const cleanup: (() => void)[] = [];
    
    if(allPres){
      for (const pre of allPres) {
        const code = pre['firstElementChild'];
        if (!code || !/code/i.test(code['tagName'])) {
          continue;
        }

        //pre.appendChild(createCopyButton(code));

        const highlightRanges = pre['dataset']['line'];
        //const lineNumbersContainer = pre.querySelector('.line-numbers-rows');
        const lineNumbersContainer = (pre as HTMLElement).querySelector('.line-numbers-rows');


        if (!highlightRanges || !lineNumbersContainer) {
          continue;
        }

        const runHighlight = () => highlightCode(pre, highlightRanges, lineNumbersContainer);
        runHighlight();

        const ro = new ResizeObserver(runHighlight);
        ro.observe(pre);

        cleanup.push(() => ro.disconnect());
      }
    }

    return () => cleanup.forEach(f => f());
  }, []);









  

  return (
    <div ref={rootRef} className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
