function listHikes() {
    const listElement = document.getElementById("hikes");

    console.dir(listElement)
    listElement.innerHTML = " ";

    hikeList.forEach(hike => {
        listElement.appendChild(renderHike(hike))
    });
}


function createHike(hike) {
    const item = document.createElement("li");
    console.dir(item);
    const image = document.createElement("img")
    image.src = hike.imgSrc;
    image.alt = hike.imgAlt;
    const title = document.createElement("h2");
    title.innerText = hike.name;
    item.appendChild(image);
    item.appendChild(title);

    item.appendChild(image);
    return item;
}

function renderHike(hike) {
    const item = document.createElement("li");
    item.innerHTML = `  <img src="${hike.imgSrc}" alt="${hike.imgAlt}"/>
    <h2>Bechler Falls</h2>
    <div>
      <h3>Distance</h3>
      <p>3 miles</p>
    </div>
    <div>
      <h3>Difficulty</h3>
      <p>Easy</p>
    </div>
    <div>
      <h3>Description</h3>
      <p>Beautiful short hike along the Bechler river to Bechler Falls</p>
    </div>
    <div>
      <h3>How to get there</h3>
      <p>
        Take Highway 20 north to Ashton. Turn right into the town and
        continue through. Follow that road for a few miles then turn left
        again onto the Cave Falls road. Drive to the end of the Cave Falls
        road. There is a parking area at the trailhead.
      </p>
    </div>`;
}

listHikes();