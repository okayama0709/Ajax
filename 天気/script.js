// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token =
  "BQA2nEvt4dPkHZffeLjAxoUhf0fzkf5u-Vid_0V7VFnLLQQLLQ0qH2k0YR3DZpRSiFR9JHmc81ZQMV03nW34wH0kKi2vHHEUiuhJ-aw6bpul27utDM8zBxPKl23kKpq8jylHSKxJamzys7HjOPmwr0HWZfjvj8SAzZ5fQfRpMps2GLwoEoaQ5qlPFfGWO0TIaNT7doiZuqP6pNasFoj-caOuQNswdHt_kH6UWzmQd1SA5nRhYIJ5-lJyK6xPpiGYZt-B0QpZpJlgkaMmqyeHqNTdZ6aU";

async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body),
  });
  return await res.json();
}

async function getTopTracks() {
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (
    await fetchWebApi("v1/me/top/tracks?time_range=long_term&limit=5", "GET")
  ).items;
}

const topTracks = getTopTracks();
// console.log(
//   topTracks?.map(
//     ({ name, artists }) =>
//       `${name} by ${artists.map((artist) => artist.name).join(", ")}`
//   )
// );
console.log(topTracks);
//東海4県のコード番号をオブジェクトの配列にしておきます。
const endpoint = [
  { 愛知県: 230000 },
  { 岐阜県: 210000 },
  { 三重県: 240000 },
  { 静岡県: 220000 },
];

const url = `https://api.spotify.com/${endpoint}`;

fetch(url)
  .then(function (response) {
    if (response.status !== 200) {
      console.log("問題がありました。ステータスコード:" + response.status);
      return;
    }
    // responseのテキストを調べる
    response.json().then(function (data) {
      console.log(data);
    });
  })
  .catch(function (err) {
    console.log("Fetchエラー:", err);
  });
