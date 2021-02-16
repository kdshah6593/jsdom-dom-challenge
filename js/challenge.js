document.addEventListener("DOMContentLoaded", function() {
    let counter = document.getElementById("counter");
    let counterValue = parseInt(counter.innerText);
    
    let counting = setInterval(function() {
        counterValue += 1;
        counter.innerText = counterValue;
    }, 1000);

    const minus = document.getElementById("minus");
    const plus = document.getElementById("plus");
    const heart = document.getElementById("heart");
    const pause = document.getElementById("pause");
    const likesUl = document.getElementsByClassName("likes")[0];
    const likeCounter = [];
    let active = 1;
    const newComment = document.getElementById("comment-form");
    const newCommentText = document.getElementById("comment-input");
    const comments = document.getElementById("list");

    minus.addEventListener("click", function() {
        counterValue -= 1;
        counter.innerText = counterValue;
    });

    plus.addEventListener("click", function() {
        counterValue += 1;
        counter.innerText = counterValue;
    });

    heart.addEventListener("click", function() {
        if (likeCounter.includes(counterValue)) {
            const currentLi = document.getElementById(`${counter.innerText}`)
            const spanValue = currentLi.children[0].innerText
            const updatedSpanValue = parseInt(spanValue) + 1;
            currentLi.innerHTML = `${counter.innerText} has been liked <span>${updatedSpanValue}</span> times`;
        } else {
            likeCounter.push(counterValue);
            const newLi = document.createElement("LI");
            newLi.innerHTML = `${counter.innerText} has been liked <span>1</span> time`;
            newLi.id = counter.innerText;
            likesUl.appendChild(newLi);
        }
    });

    pause.addEventListener("click", function() {
        let currentCounter = counter.innerText
        if (active === 1) {
            clearInterval(counting);
            active = 0;
            minus.disabled = true;
            plus.disabled = true;
            heart.disabled = true;
            pause.innerText = "resume";
        } else {
            counter.innerText = currentCounter
            active = 1;
            minus.disabled = false;
            plus.disabled = false;
            heart.disabled = false;
            pause.innerText = "pause";
            counting = setInterval(function() {
                counterValue += 1;
                counter.innerText = counterValue;
            }, 1000);
        }
    });

    newComment.addEventListener("submit", function(e) {
        e.preventDefault();
        const paragraph = document.createElement("P");
        paragraph.innerText = `${newCommentText.value}`;
        comments.appendChild(paragraph);
    })

  }); 