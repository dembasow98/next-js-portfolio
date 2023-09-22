import fs from 'fs';


export const getPostsMetadata = () => {

    const folder = 'posts/';
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith('.md'));
    const slugs = markdownPosts.map((file) => file.replace('.md', ''));

    return slugs
    
};
