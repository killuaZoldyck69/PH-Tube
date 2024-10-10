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

function displayVideos(data) {
  console.log(data.videos);

  const videos = document.getElementById("videos");
  data.videos.forEach((element) => {
    const div = document.createElement("div");
    div.classList = "card card-compact";
    div.innerHTML = `<figure>
    <img
      src=${element.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>`;
    videos.appendChild(div);
  });
}

loadVideos();
