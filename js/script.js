var section = document.querySelector("#frame section");

var article = [
  ["t-1-213373_640x480.jpg", "Make a Whish", "2020.08.19", "This work is about the centimental & cute baby."],
  ["t-3-325075_640x480.jpg", "Purple Haze", "2020.07.29", ""],
  ["t-21-545213_640x480.jpg", "Masked Model", "2020.04.30", ""],
  ["t-7-360109_640x480.jpg", "Birds of Beauty", "2020.05.04", ""],
  ["t-8-308603_640x480.jpg", "Summer Wheat", "2019.06.14", ""],
  ["t-9-340072_640x480.jpg", "Before the Storm", "2021.03.17", ""],
  ["t-17-247234_640x480.jpg", "Young Woman", "2019.10.07", ""],
  ["shutterstock_58264459-111274_640x480.jpg", "Before the Storm", "2020.12.24", ""],
  ["t-13-584189_640x480.jpg", "A Loving Couple", "2021.02.21", ""],
  ["shutterstock_56785618-132726_640x480.jpg", "Spiral Staircase", "2019.10.13", ""],
  ["t-5-236106_640x480.jpg", "Lonely Ladybug", "2021.01.16", ""],
  ["t3-8-321596_640x480.jpg", "Emphasis Lafuta", "2020.07.07", ""],
  ["t-19-373493_640x480.jpg", "Monk Walks", "2021.03.12", ""],
  ["t3-9-289799_640x480.jpg", "Arena Vivian", "2020.04.05", ""]
];

var insert = "";

for (v of article){
  insert += `
    <article>
      <img src="./img/${v[0]}" alt="">
      <div class="bg"></div>
      <div class="txt">
        <h3>${v[1]}</h3>
        <p>${v[2]}</p>
        <span>${v[3]}</span>
        <div class="button">
          <div class="circle">
            <img src="./img/zoom.png" alt="">
          </div>
        </div>
      </div>
    </article>
  `;
}

section.innerHTML = insert;
