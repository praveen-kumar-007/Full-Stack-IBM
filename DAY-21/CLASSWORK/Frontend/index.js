let parent=document.getElementById("parent");
async function getData() {
    let data=await fetch(`http://localhost:3000/posts`);

    let responce=await data.json();
    showData(responce);

    console.log(responce);
}
getData();

async function showData(arr) {
    parent.innerText=null;
    arr.forEach((el,index) => {
        let box=document.createElement("div");
        box.className="box";

        let title=document.createElement("p");
        title.innerText=el.title;

        let views=document.createElement("p");
        views.innerText=el.views;

        box.append(title,views);

        parent.append(box);
    });
}

let button=document.getElementById("btn");
button.addEventListener("click",async()=>{
    let value=document.getElementById("input").value;

    let obj={
        title:value,
        views:Math.random(100,1000)
    }

    try{
        let responce=await fetch(`http://localhost:3000/posts`,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(obj)
        });

        if(responce){
            getData()
            alert("Data save succesfully")
        }
        let res=await responce.json();
        console.log(res);
    }catch(error){
        console.log(error);
    }

})

const update = document.querySelector("#update");
const log = document.querySelector("#log");

update.addEventListener("click", () => {
  let sign = prompt("What's your sign?");

  if (sign === null) {
    log.innerText = "OK, maybe next time.";
  } else if (sign.toLowerCase() === "") {
    log.innerText = "Don't be shy, enter your sign!";
  } else if (sign.toLowerCase() === "scorpio") {
    log.innerText = "Wow! I'm a Scorpio too!";
  } else {
    log.innerText = `${sign}`;
  }
});


