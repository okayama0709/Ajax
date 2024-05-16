const button = document.querySelector(".button");
const post = document.getElementById("postal-code").value;
const result = document.querySelector("dd");

const url = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${post}`;

fetch(url)
  .then(function (response) {
    if (response.status !== 200) {
      console.log("問題がありました。ステータスコード:" + response.status);
      return;
    }
    response.json().then(function (data) {
      console.log(data);
      const results = data["results"][0];
      console.log(results);
      result.innerHTML = `${results["address1"]}${results["address2"]}`;
    });
  })
  .catch(function (err) {
    console.log("Fetchエラー:", err);
  });
