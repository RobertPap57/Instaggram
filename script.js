let posts = [
    {
        "author": "MuscleMeals",
        "profile": "img/profile/musclefoods.png",
        "profileClass": "post-header-img",
        "image": "img/pancakes.jpg",
        "imgClass": "post-img",
        "time": 21,
        "location": "Chicago, Illinois, USA",
        "description": "Fuel your muscle with our delicious #ProteinPancakes, the perfect blend of flavor and nutrition to kickstart your morning! #HealthyBreakfast #PowerFood #NutritionBoost",
        "isLiked": false,
        "likes": 48,
        "user": ['Mateo', 'Emily', 'David', 'Sarah'],
        "commentsNr": 4,
        "comments": ['Delicious and nutritious! These #ProteinPancakes are my new breakfast go-to! 🥞💪 #HealthyEating #MorningFuel',
            'Obsessed with these Protein Pancakes! Quick, easy, and oh-so-tasty! 🥞😋 #BreakfastOfChampions #FuelYourDay',
            'Can\'t get enough of these Protein Pancakes! Perfect blend of flavor and protein to start the day strong! 🥞💥 #PowerBreakfast #HealthyLiving',
            'These Protein Pancakes are a game-changer! So delicious and filling, plus they\'re packed with nutrients! 🥞👌 #FitFood #MorningBoost'
        ]
    },
    {
        "author": "Markus",
        "profile": "img/profile/markus.png",
        "profileClass": "post-header-img",
        "image": "img/gym.jpg",
        "imgClass": "post-img",
        "time": 7,
        "location": "London, United Kingdom",
        "description": "Let's make gains and crush those workouts! 💪🏋️‍♂️ #GymLife #FitnessGoals #TrainHard",
        "isLiked": false,
        "likes": 15,
        "user": ['Liam', 'James', 'Oliver', 'Emma'],
        "commentsNr": 4,
        "comments": ['Crushing it in the gym! Your commitment to your fitness goals is truly inspiring. Keep up the amazing work! 💪🏋️‍♂️ #GymMotivation #FitnessJourney',
            'Love your dedication to fitness! Keep pushing yourself and enjoy the journey to stronger, healthier you! 💪🏋️‍♂️ #FitnessInspiration #KeepGoing',
            'Your dedication to fitness is impressive! Keep pushing yourself and striving for progress every day. 💪🏋️‍♂️ #FitnessGoals #MotivationMonday',
            'Absolutely! Consistency is key to reaching those fitness goals! 💪 Keep up the great work! #MotivationMonday #FitnessJourney'
        ]
    },
    {
        "author": "DriftFestival",
        "profile": "img/profile/driftfestival.jpg",
        "profileClass": "post-header-img",
        "image": "img/drift.jpg",
        "imgClass": "post-img",
        "time": 14,
        "location": "Nijmegen, Netherlands",
        "description": "The engines are roaring and the excitement is building, the drift festival has just begun! 🚗💨 Let's buckle up and enjoy the ride! #DriftFestival #RevvedUp #StartYourEngines",
        "isLiked": true,
        "likes": 112,
        "user": ['Brian', 'Dominic'],
        "commentsNr": 2,
        "comments": ['Stoked for the start of the drift festival! Ready to witness some epic drift battles and high-speed action! 🚗💨 #DriftFestival #AdrenalineRush #CarEnthusiast',
            'Let the drifting madness begin! Can\'t wait to see the smoke, hear the engines, and feel the adrenaline pumping! 🏁🔥 #DriftFestival #RevvedUp #StartYourEngines'
        ]
    },
    {
        "author": "Robert",
        "profile": "img/profile/myProfile.png",
        "profileClass": "post-header-img",
        "image": "img/coding.jpg",
        "imgClass": "post-img",
        "time": 3,
        "location": "Germany",
        "description": "Embarking on the coding journey with enthusiasm and determination! 💪💻 #CodingJourney #NewbieCoder #TechEnthusiast",
        "isLiked": false,
        "likes": 3,
        "user": ['Janine', 'Albert', 'Max'],
        "commentsNr": 3,
        "comments": [
            'Way to go! Keep that determination alive! 💪 Learning to code is such a rewarding journey. 🌟 #CodingCommunity #KeepLearning #TechForLife',
            'Your enthusiasm is infectious! Embrace the challenges and celebrate every small victory along the way. You\'ve got this! 💪💻 #CodingAdventure #TechExplorer #NeverStopLearning',
            'Love your enthusiasm! Coding is all about embracing the journey and enjoying the process. Keep up the great work! 💻🚀 #TechJourney #CodingBeginner #KeepGoing'
        ]
    }
]


load()

function render() {
    const postContainer = document.getElementById('postcontainer');
    postContainer.innerHTML = '';
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        postContainer.innerHTML += loadPostHtml(post, commentsNr, i);
        var commentsNr = post.comments.length;
        const likeClass = post.isLiked ? 'like-btn-red' : 'like-btn-hover';
        const likeSrc = post.isLiked ? './img/icons/heart-fill.svg' : './img/icons/heart.svg';
        const likeBtn = document.getElementById(`like-btn${i}`);
        likeBtn.src = likeSrc;
        likeBtn.classList.remove('like-btn-hover', 'like-btn-red');
        likeBtn.classList.add(likeClass);
        const commentContainer = document.getElementById(`comment${i}`);
        commentContainer.innerHTML += '';
        commentForLoop(post, commentContainer);
    }
}

function commentForLoop(post, commentContainer){
    for (let j = 0; j < post['comments'].length; j++) {
        const comment = post['comments'][j];
        const user = post['user'][j];
        commentContainer.innerHTML += loadCommentHtml(user, comment);
    }
}

function like(index) {
    let post = posts[index];
    let likeBtn = document.getElementById(`like-btn${index}`);
    if (!post.isLiked) {
        post.isLiked = true;
        post.likes++;
        likeBtn.src = './img/icons/heart-fill.svg';
        likeBtn.classList.add('like-btn-red');
        likeBtn.classList.remove('like-btn-hover');
    } else {
        post.isLiked = false;
        post.likes--;
        likeBtn.src = './img/icons/heart.svg';
        likeBtn.classList.remove('like-btn-red');
        likeBtn.classList.add('like-btn-hover');
    }
    render();
    save();
}

function addComment(index) {
    let input = document.getElementById(`commentinput${index}`).value;
    let name = document.getElementById(`nameinput${index}`).value;
    if (input === '' || name === '') {
        alert('To post a comment, please write something in the name and text field.');
        return;
    }
    posts[index]['user'].push(name);
    posts[index]['comments'].push(input);
    render();
    save();
}

function addNewPost() {
    let newName = document.getElementById('new-post-name').value;
    let newText = document.getElementById('new-post-text').value;
    if (newName === '' || newText === '') {
        alert('To create a new post, please write something in the name and text field.');
        return;
    }
    let newPost = loadNewPostElement(newName, newText)
    posts.push(newPost);
    closePost();
    render();
    save();
}

function openPost() {
    document.getElementById('new-post-container').classList.remove('d-none');
}

function closePost() {
    document.getElementById('new-post-container').classList.add('d-none');
}

function save() {
    let stringifyedPosts = JSON.stringify(posts);
    localStorage.setItem('posts', stringifyedPosts);
}

function load() {
    let stringifyedPosts = localStorage.getItem('posts');
    if (stringifyedPosts) {
        posts = JSON.parse(stringifyedPosts);
    }
}

function loadPostHtml(post, commentsNr, index) {
    return `
    <div class="post-container">
    <div class="post-header">
    <img class="${post['profileClass']}" src="${post['profile']}" alt="">
    <div>
    <div class="post-profile">
    <h2>${post['author']}</h2>
    <img class="dot" src="./img/icons/dot.svg" alt="">
    <span>${post['time']}m</span>
    </div>
    <span>${post['location']}</span>
    </div>
    <img class="threedots" src="./img/icons/three-dots.svg" alt="">
    </div>
    <img class="${post['imgClass']}" src="${post['image']}" alt="">
    <div class="under-post-img-container">
    <div class="post-icons">
    <img onclick="like(${index})" id="like-btn${index}" class="like-btn-hover" src="./img/icons/heart.svg" alt="">      
    <img src="./img/icons/chat.svg" alt="">
    <img src="./img/icons/send.svg" alt="">
    <img src="./img/icons/bookmark.svg" alt="">
    </div>
    <h2>${post['likes']} likes</h2>
    <div>
    <h2>${post['author']}</h2>
    <span>${post['description']}</span>
    </div>
    <div>
    <h3>${commentsNr} comments</h3>
    <div id="comment${index}"></div>
    <div class="newcomment">
    <div class="inputs">
    <input id="nameinput${index}" placeholder="Name" type="text">
    <input id="commentinput${index}" placeholder="Add a comment..." type="text">
    </div>
    <img class="send-btn-hover" onclick="addComment(${index})" src="./img/icons/send.svg" alt="">
    </div>
    </div>
    </div>
    </div>
    `;
}

function loadNewPostElement(newName, newText) {
    return {
        "author": newName,
        "profile": "img/profile/newProfile.png",
        "profileClass": "new-user-img",
        "image": "",
        "imgClass": "d-none",
        "time": 0,
        "location": "",
        "description": newText,
        "isLiked": false,
        "likes": 0,
        "user": [],
        "commentsNr": 0,
        "comments": []
    };
}

function loadCommentHtml(user, comment) {
    return `
            <div class="comment">
            <h2>${user}</h2>
            <span>${comment}</span>
            </div>`;
}