function addLike(row){
    var like = document.querySelector(`.feedbackContainer:nth-child(${row}) .numberOfLikes`);
    like.innerHTML = parseInt(like.innerHTML)+1;
    console.log(parseInt(like.innerHTML)+1);
}