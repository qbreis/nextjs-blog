import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';

const postsDirectory = path.join(process.cwd(), 'posts');

// Get file names under /posts
const fileNames = fs.readdirSync(postsDirectory);

export function getSortedPostsData(categoryId?: any) { // make optional parameter categoryId?
    
    const allPostsDataResult: any = [];

    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        /*return {
            id,
            ...matterResult.data,
        };*/

        if(
            !categoryId // If no category is specified get all posts
            ||
            (
                categoryId // If category specified...
                &&
                matterResult.data.categories.includes(categoryId) // ... get only posts with this category
            )
        ){
            allPostsDataResult.push({
                id,
                ...matterResult.data,
            });
        }
        


    });


    // Sort posts by date
    return allPostsDataResult.sort(({ date: a }: any, { date: b }: any) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });
}

export function getAllPostIds() {

  
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}
  
export async function getPostData(id: any) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html, { sanitize: false })
        .use(prism, { plugins: ["line-numbers"] })
        .process(matterResult.content);
    const contentHtml = processedContent.toString();
  
    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}

export function getAllCategoryIds() {

    const categories: any = [];

    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        const postCategories = matterResult.data.categories.map((postCategory: any) => {
            if(!categories.includes(postCategory)){
                categories.push(postCategory);
            }
        })

    });

    const categoriesResult = categories.map((category: any) => {
        
        /*
        console.log('category: '+category);
        const aux = getSortedPostsData(category);
        console.log(aux);
        console.log('Number of posts is '+aux.length);
        */
        return {
            params: {
                id: category,
                posts: getSortedPostsData(category).length,
            },
        };
    });


    return categoriesResult;
    /*
    // Sort categories by number of posts
    console.log(categoriesResult.params);
    return categoriesResult.sort(({ posts: a }: any, { posts: b }: any) => {
        console.log(categoriesResult+'...'+a+' --- '+b);
        console.log(`Comparing ${a} to ${b}`);
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });

    */
}

/*
export function getPostsByCategory(id: any) {
    //const fileNames = fs.readdirSync(postsDirectory);
    
    const CategoryId = id;

    const categories: any = [];

    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
        };

    });





}
*/