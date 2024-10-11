const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data))
    .catch((error) => console.log(error));
};

const oneCard = {
  category_id: "1001",
  description:
    "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey.",
  others: { views: "100K", posted_date: "16278" },
  thumbnail: "https://i.ibb.co/L1b6xSq/shape.jpg",
  title: "Shape of You",
  video_id: "aaaa",
};

function getTimeString(time) {
  const hour = parseInt(parseInt(time) / 3600);
  const min = parseInt(parseInt(time % 3600) / 60);
  const sec = parseInt(time % 3600) % 60;
  return `${hour} hrs ${min} min ${sec} sec ago `;
}

function displayVideos(data) {
  console.log(data.videos);

  const videos = document.getElementById("videos");
  data.videos.forEach((element) => {
    const div = document.createElement("div");
    div.classList = "card card-compact";
    div.innerHTML = `<figure class="h-[200px] rounded-lg relative">
    <img
      src=${element.thumbnail}
      alt="Shoes"
      class="h-full w-full object-cover" />
      ${
        element.others.posted_date
          ? `<span class="absolute bg-black rounded p-1 text-white right-2 bottom-2"> ${getTimeString(
              element.others.posted_date
            )} </span>`
          : ""
      }
  </figure>
  <div class="flex gap-3 py-5">
    <img src=${
      element.authors[0].profile_picture
    } class="w-10 h-10 rounded-full object-cover"/>
    <div class="">    
    <h2 class="text-base font-bold">${element.title}</h2>
    <div class="flex items-center gap-2" >     
    <p class="py-2 text-sm">${element.authors[0].profile_name}</p>
    ${
      element.authors[0].verified
        ? '<img class="w-5 h-5" src="https://img.icons8.com/?size=100&id=SRJUuaAShjVD&format=png&color=000000"/>'
        : ""
    }
    </div>
    <p class="text-sm">${element.others.views}</p>
    </div>
  </div>`;
    videos.appendChild(div);
  });
}

loadVideos();
