/*
*   This content is licensed according to the W3C Software License at
*   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/
function goToLink (event, url) {
  var type = event.type;

  if (
    (type === 'click') ||
    (type === 'keydown' && event.keyCode === 13)
  ) {
    window.location.href = url;

    event.preventDefault();
    event.stopPropagation();
  }
}

function show() {
  var box1 = document.getElementById("box-1");
  var box2 = document.getElementById("box-2");
  console.log("box1 hidden?");
  console.log(box1.style.display === "none");
  console.log("box2 hidden?");
  console.log(box2.style.display === "none");
  // console.log("box1 hidden?" + box1.style.display === "none");
  // box1.style.background = "red";
  if (box2.style.display === "none") {
    box2.style.display = "flex";
    box2.classList.add("active");
    box1.style.background = "red";

    box1.style.display = "none";
    box2.classList.remove("active");

  } else if (box1.style.display === "none") {
    box1.style.display = "flex";
    box1.classList.add("active");
    box1.style.background = "blue";

    box2.style.display = "none";
    box2.classList.remove("active");
  }
}

function displayTitle(x){
  var title = document.getElementById("title");

  if (x.classList.contains("balcony1")){
    title.innerHTML = "1st Balcony";
  } else if (x.classList.contains("balcony2")){
    title.innerHTML = "2nd Balcony";
  } else if (x.classList.contains("bowl")){
    title.innerHTML = "Bowl";
  } else if (x.classList.contains("stage")){
    title.innerHTML = "Stage";
  } else {
    title.innerHTML = "&nbsp";
  }

}

function hideTitle(){
  var title = document.getElementById("title");
  title.innerHTML = "&nbsp";

}
