const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21492
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 12502
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 15137
    }
]

// posts

const mainEl = document.getElementById("mainEL"); 

for (let i=0; i<posts.length; i++) {
    mainEl.innerHTML +=`
    <section>
        <div class="post-head-container">
            <img class="pfp post-pfp" src="${posts[i].avatar}" alt="Profile picture of Vincent Van Gogh.">
            <div class="post-head-text-container">
                <p class="post-name bold">${posts[i].name}</p>
                <p class="post-location">${posts[i].location}</p>
            </div>
        </div>
        <img class="post-img" src="${posts[i].post}" alt="Selfie painting of Vincent Van Gogh.">
        <div class="post-icons-container">
            <img class="post-icons heart" src="images/icon-heart.png" alt="like button shaped like a heart.">
            <img class="post-icons" src="images/icon-comment.png" alt="Comment button shaped like a though bubble.">
            <img class="post-icons" src="images/icon-dm.png" alt="Direct message button shaped like a paper plane.">
        </div>
        <p class="likes bold">${posts[i].likes} likes</p>
        <p class="post-description"><span class="bold">${posts[i].username}</span> ${posts[i].comment}</p>
    </section>
    <section class="break"></section>`
}

// likes 

const nodeListLikes = document.querySelectorAll(".likes"); 
const nodeListHeart = document.querySelectorAll(".heart"); 
const nodeListPost = document.querySelectorAll(".post-img"); 

// heart icon single click 
for (let i = 0; i < posts.length; i++) {
    nodeListHeart[i].addEventListener("click", function plusOne (){
        posts[i].likes += 1 ; 
        nodeListLikes[i].innerHTML = `${posts[i].likes} likes`
    });    
}; 

// post double click 
for (let i = 0; i < posts.length; i++) {
    nodeListPost[i].addEventListener("dblclick", function plusOne (){
        posts[i].likes += 1 ; 
        nodeListLikes[i].innerHTML = `${posts[i].likes} likes`
    });    
}; 

console.log(nodeListLikes[0]); 













