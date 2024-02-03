var post_made = document.querySelector("#post");
var text = document.querySelector("#text-area");
var liked = false;
var editable = false;

post_made.addEventListener("click",function(){
    let head = document.querySelector("h2");
        head.innerText = "POST YOUR THOUGHTS HERE";
    var view = document.querySelector("#view-area");
    const div = document.createElement("div");
    const img = document.createElement("div");
    const edit = document.createElement("div");
    const comment = document.createElement("div");
    div.classList.add("feed");
    var text_feed = text.value;
    div.innerText = text_feed;
    
    img.classList.add("delete");
    div.appendChild(img);

    var Like_option = document.createElement("div");
    Like_option.classList.add("notLiked");
    div.appendChild(Like_option);

    Like_option.addEventListener("click",function(){
        if(liked==true){
            liked = false;
            Like_option.classList.remove("liked");
            Like_option.classList.add("notLiked");
        }
        else{
            liked = true;
            Like_option.classList.remove("notLiked");
            Like_option.classList.add("liked");
        }
    })

    edit.classList.add("edit");
    div.appendChild(edit);

    let ed = div.querySelector(".edit");
    ed.addEventListener("click",function(){
        if(editable==true){
            editable= false;
            ed.parentElement.contentEditable = false;
        }
        else{
            editable = true;
            ed.parentElement.contentEditable = true;
        }
    })


    div.contentEditable = true;

    comment.classList.add("comment");
    div.appendChild(comment);

    let com = div.querySelector(".comment");
    com.addEventListener("click",function(){
        let head = document.querySelector("h2");
        head.innerText = "WRITE YOUR COMMENT";
    })


    view.appendChild(div);
    text.value = "";
    

    var del = div.querySelector(".delete");
    del.addEventListener("click",function(){
        let rem = del.parentElement;
        rem.remove();
    })
   
})



