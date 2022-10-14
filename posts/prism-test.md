---
title: 'Prism Test'
excerpt: 'In this chapter...'
date: '2022-10-26'
categories: ['nextjs', 'bulma', 'test']
tags: ['dos', 'tres']
repository: 'https://github.com/qbreis/blog/tree/dev-chapter-1-setup'
draft: true
---
# Blog - Next.js - Chapter #1 - Setup..
 
I will start more or less following documentation in [https://nextjs.org/learn](https://nextjs.org/learn).
 
## 1.1 Create Next App..
 
I open terminal, `cd` into the directory I want to create the app in, and run the following command:
 
```bash[class="line-numbers"][class="contained"][class="hide-numbers"]
yarn create next-app --typescript blog
```
 
In this case I want to use typescript and the name for the app will be just blog.







```js[class="line-numbers"]
export function getPostsPaginated(params?: any) {
  if (!params?.limit) {
    return posts;
  }
  const getPosts: any = [];
  let counter = 0;
  posts.map((post: any) => {
    if (counter < params?.limit) {
      counter++;
      getPosts.push(post);
    }
  });
  return getPosts;
}

export function getPostsPaginatedIds() {
  return getPostsPaginated({ limit: 3 }).map((post: any) => {
    return {
      params: {
        id: post.id,
      },
    };
  });
}
```


```js[class="line-numbers"][class="hide-numbers"][data-line="2,4"]
const Home: NextPage = () => {
  return (
    ...
      <Head>
        <title>Create Next App</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
      </Head>
    ...
```

```css
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
```

```scss
$primary: #900; // Aquí se sobreescriben todas las variables que se quieran

@import 'bulma/bulma.sass';
```

```javascript {2}
const hola = 'world';
// comment 1
// line 2 or 3 or 4
```
