let API_KEY = "AIzaSyDbnVusUBr1QtmbHLz6EkDSQaCvletNlVI";
let search_term = document.getElementById("search").value || "University";
let video_container = document.getElementById("video-data");

async function get_data(params) {
    try {
        
    let data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search_term}&type=video&videoCaption=any&videoDefinition=any&videoEmbeddable=true&videoLicense=any&maxResults=20&videoType=any&key=${API_KEY}
    `);
    let response = await data.json();
    console.log(data);
        console.log(response);
        showvideocards(response.items);
    } catch (error) {
        console.log(error);
    }
}
get_data();


async function showvideocards(array) {
    console.log(array);
    
    array.forEach(({snippet,id:{videoId}}) => {
        let videoBox = document.createElement("div");
        videoBox.className = "video";

        let img = document.createElement("img");
        img.src = snippet.thumbnails.medium.url;

        let title = document.createElement("p");
        title.innerHTML = snippet.title;

        let channel_title=document.createElement("p");
        channel_title.innerHTML = snippet.channelTitle;
        
        videoBox.append(img, title, channel_title);
        video_container.append(videoBox);

    });

    video_container.onclick=((snippet,id) => {
        ;
    }
    )

}