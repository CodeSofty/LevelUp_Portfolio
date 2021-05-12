/* This project will get a response from the Blogger API and send back data that can be
parsed and put into dynamically updated data into HTML and passed to the browser for my portfolio
to showcase. */


// Create a GET request to get Blogger info and return JSON data
const api_Key = 'AIzaSyBGEL5qYjI-3US7g18utRc1llvpPSQ7mYo';
fetch(`https://www.googleapis.com/blogger/v3/blogs/3339414188365267951/posts?key=${api_Key}`)
.then(response => {
    return response.json();
}).then(posts => {
    
// NOTE: You can return separated objects of each post by using console.log(individualPosts);
// Loop through and separate each object by itself
    posts.items.forEach(function(individualPosts) {

// Store blog post data in variables
    const postTitle = individualPosts.title;
    const  urlLink = individualPosts.url;
    let content = individualPosts.content;
    const elipticals = "...";


// Take out any HTML code from strings and stores a few sentences and ends with elipticals
    content = individualPosts.content.replace( /(<([^>]+)>)/ig, '');
    content = content.substring(0, 120) + elipticals;
// Insert new HTML of the blog content dynamically into the body
    newHTML = document.querySelector('.blog');
    newHTML.insertAdjacentHTML('afterbegin',
    `<div class="blog__box">
        <div class="blog__text-box">
            <h3 class = "blog-title heading-tertiary">${postTitle}</h3>
            <p>${content}</p>
        </div>
    </div>`);
});
})

// Add button with URL link to link to the post

// Log errors to console
.catch(error => {
    console.log('error!');
    console.error(error);
});