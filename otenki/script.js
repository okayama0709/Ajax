const codeNum = {
  北海道: "016000",
  青森県: "020000",
  岩手県: "030000",
  宮城県: "040000",
  秋田県: "050000",
  山形県: "060000",
  福島県: "070000",
  茨城県: "080000",
  栃木県: "090000",
  群馬県: 100000,
  埼玉県: 110000,
  千葉県: 120000,
  東京都: 130000,
  神奈川県: 140000,
  新潟県: 150000,
  富山県: 160000,
  石川県: 170000,
  福井県: 180000,
  山梨県: 190000,
  長野県: 200000,
  岐阜県: 210000,
  静岡県: 220000,
  愛知県: 230000,
  三重県: 240000,
  滋賀県: 250000,
  京都府: 260000,
  大阪府: 270000,
  兵庫県: 280000,
  奈良県: 290000,
  和歌山県: 300000,
  鳥取県: 310000,
  島根県: 320000,
  岡山県: 330000,
  広島県: 340000,
  山口県: 350000,
  徳島県: 360000,
  香川県: 370000,
  愛媛県: 380000,
  高知県: 390000,
  福岡県: 400000,
  佐賀県: 410000,
  長崎県: 420000,
  熊本県: 430000,
  大分県: 440000,
  宮崎県: 450000,
  鹿児島県: 460000,
  沖縄県: 470000,
};

const weatherCode = {
  100: ["100.svg", "500.svg", "晴れ"],
  101: ["101.svg", "501.svg", "晴れ時々曇り"],
  102: ["102.svg", "502.svg", "晴れ一時雨"],
  103: ["102.svg", "502.svg", "晴れ時々雨"],
  104: ["104.svg", "504.svg", "晴れ一時雪"],
  105: ["104.svg", "504.svg", "晴れ時々雪"],
  106: ["102.svg", "502.svg", "晴れ一時雨か雪"],
  107: ["102.svg", "502.svg", "晴れ時々雨か雪"],
  108: ["102.svg", "502.svg", "晴れ一時雨か雷雨"],
  110: ["110.svg", "510.svg", "晴れ後時々曇り"],
  111: ["110.svg", "510.svg", "晴れ後曇り"],
  112: ["112.svg", "512.svg", "晴れ後一時雨"],
  113: ["112.svg", "512.svg", "晴れ後時々雨"],
  114: ["112.svg", "512.svg", "晴れ後雨"],
  115: ["115.svg", "515.svg", "晴れ後一時雪"],
  116: ["115.svg", "515.svg", "晴れ後時々雪"],
  117: ["115.svg", "515.svg", "晴れ後雪"],
  118: ["112.svg", "512.svg", "晴れ後雨か雪"],
  119: ["112.svg", "512.svg", "晴れ後雨か雷雨"],
  120: ["102.svg", "502.svg", "晴れ朝夕一時雨"],
  121: ["102.svg", "502.svg", "晴れ朝の内一時雨"],
  122: ["112.svg", "512.svg", "晴れ夕方一時雨"],
  123: ["100.svg", "500.svg", "晴れ山沿い雷雨"],
  124: ["100.svg", "500.svg", "晴れ山沿い雪"],
  125: ["112.svg", "512.svg", "晴れ午後は雷雨"],
  126: ["112.svg", "512.svg", "晴れ昼頃から雨"],
  127: ["112.svg", "512.svg", "晴れ夕方から雨"],
  128: ["112.svg", "512.svg", "晴れ夜は雨"],
  130: ["100.svg", "500.svg", "朝の内霧後晴れ"],
  131: ["100.svg", "500.svg", "晴れ明け方霧"],
  132: ["101.svg", "501.svg", "晴れ朝夕曇り"],
  140: ["102.svg", "502.svg", "晴れ時々雨と雷"],
  160: ["104.svg", "504.svg", "晴れ一時雪か雨"],
  170: ["104.svg", "504.svg", "晴れ時々雪か雨"],
  181: ["115.svg", "515.svg", "晴れ後雪か雨"],
  200: ["200.svg", "200.svg", "曇り"],
  201: ["201.svg", "601.svg", "曇り時々晴れ"],
  202: ["202.svg", "202.svg", "曇り一時雨"],
  203: ["202.svg", "202.svg", "曇り時々雨"],
  204: ["204.svg", "204.svg", "曇り一時雪"],
  205: ["204.svg", "204.svg", "曇り時々雪"],
  206: ["202.svg", "202.svg", "曇り一時雨か雪"],
  207: ["202.svg", "202.svg", "曇り時々雨か雪"],
  208: ["202.svg", "202.svg", "曇り一時雨か雷雨"],
  209: ["200.svg", "200.svg", "霧"],
  210: ["210.svg", "610.svg", "曇り後時々晴れ"],
  211: ["210.svg", "610.svg", "曇り後晴れ"],
  212: ["212.svg", "212.svg", "曇り後一時雨"],
  213: ["212.svg", "212.svg", "曇り後時々雨"],
  214: ["212.svg", "212.svg", "曇り後雨"],
  215: ["215.svg", "215.svg", "曇り後一時雪"],
  216: ["215.svg", "215.svg", "曇り後時々雪"],
  217: ["215.svg", "215.svg", "曇り後雪"],
  218: ["212.svg", "212.svg", "曇り後雨か雪"],
  219: ["212.svg", "212.svg", "曇り後雨か雷雨"],
  220: ["202.svg", "202.svg", "曇り朝夕一時雨"],
  221: ["202.svg", "202.svg", "曇り朝の内一時雨"],
  222: ["212.svg", "212.svg", "曇り夕方一時雨"],
  223: ["201.svg", "601.svg", "曇り日中時々晴れ"],
  224: ["212.svg", "212.svg", "曇り昼頃から雨"],
  225: ["212.svg", "212.svg", "曇り夕方から雨"],
  226: ["212.svg", "212.svg", "曇り夜は雨"],
  228: ["215.svg", "215.svg", "曇り昼頃から雪"],
  229: ["215.svg", "215.svg", "曇り夕方から雪"],
  230: ["215.svg", "215.svg", "曇り夜は雪"],
  231: ["200.svg", "200.svg", "曇り海岸霧か霧雨"],
  240: ["202.svg", "202.svg", "曇り時々雨と雷"],
  250: ["204.svg", "204.svg", "曇り時々雪と雷"],
  260: ["204.svg", "204.svg", "曇り一時雪か雨"],
  270: ["204.svg", "204.svg", "曇り時々雪か雨"],
  281: ["215.svg", "215.svg", "曇り後雪か雨"],
  300: ["300.svg", "300.svg", "雨"],
  301: ["301.svg", "701.svg", "雨時々晴れ"],
  302: ["302.svg", "302.svg", "雨時々止む"],
  303: ["303.svg", "303.svg", "雨時々雪"],
  304: ["300.svg", "300.svg", "雨か雪"],
  306: ["300.svg", "300.svg", "大雨"],
  308: ["308.svg", "308.svg", "雨で暴風を伴う"],
  309: ["303.svg", "303.svg", "雨一時雪"],
  311: ["311.svg", "711.svg", "雨後晴れ"],
  313: ["313.svg", "313.svg", "雨後曇り"],
  314: ["314.svg", "314.svg", "雨後時々雪"],
  315: ["314.svg", "314.svg", "雨後雪"],
  316: ["311.svg", "711.svg", "雨か雪後晴れ"],
  317: ["313.svg", "313.svg", "雨か雪後曇り"],
  320: ["311.svg", "711.svg", "朝の内雨後晴れ"],
  321: ["313.svg", "313.svg", "朝の内雨後曇り"],
  322: ["303.svg", "303.svg", "雨朝晩一時雪"],
  323: ["311.svg", "711.svg", "雨昼頃から晴れ"],
  324: ["311.svg", "711.svg", "雨夕方から晴れ"],
  325: ["311.svg", "711.svg", "雨夜は晴れ"],
  326: ["314.svg", "314.svg", "雨夕方から雪"],
  327: ["314.svg", "314.svg", "雨夜は雪"],
  328: ["300.svg", "300.svg", "雨一時強く降る"],
  329: ["300.svg", "300.svg", "雨一時みぞれ"],
  340: ["400.svg", "400.svg", "雪か雨"],
  350: ["300.svg", "300.svg", "雨で雷を伴う"],
  361: ["411.svg", "811.svg", "雪か雨後晴れ"],
  371: ["413.svg", "413.svg", "雪か雨後曇り"],
  400: ["400.svg", "400.svg", "雪"],
  401: ["401.svg", "801.svg", "雪時々晴れ"],
  402: ["402.svg", "402.svg", "雪時々止む"],
  403: ["403.svg", "403.svg", "雪時々雨"],
  405: ["400.svg", "400.svg", "大雪"],
  406: ["406.svg", "406.svg", "風雪強い"],
  407: ["406.svg", "406.svg", "暴風雪"],
  409: ["403.svg", "403.svg", "雪一時雨"],
  411: ["411.svg", "811.svg", "雪後晴れ"],
  413: ["413.svg", "413.svg", "雪後曇り"],
  414: ["414.svg", "414.svg", "雪後雨"],
  420: ["411.svg", "811.svg", "朝の内雪後晴れ"],
  421: ["413.svg", "413.svg", "朝の内雪後曇り"],
  422: ["414.svg", "414.svg", "雪昼頃から雨"],
  423: ["414.svg", "414.svg", "雪夕方から雨"],
  425: ["400.svg", "400.svg", "雪一時強く降る"],
  426: ["400.svg", "400.svg", "雪後みぞれ"],
  427: ["400.svg", "400.svg", "雪一時みぞれ"],
  450: ["400.svg", "400.svg", "雪で雷を伴う"],
};

const button = document.getElementById("tenki");

const token =
  "BQC1yXxYgEINeVzpgzMB_eKW5ju0jFaFQoZEr883LNU3gGyyV9NgqrvTeiBIM-A7Tmtu2JEGTkspDTfuBxice2De77LANoQ70N9oldGv7FCjMCiDFhiOiOgiGB5CLOxAOCYDyysBobbOcqAZTqY8V6JSR7-EERcTzuuqjgPNcD9cpUPI0yiZ1bl-U1oe0J8Shfux1gY9RL1Jwco6GCHN-loorLh5fE42E5m8-XD9tlxNIr-TqoYuaQlMDot7UZa9N2eZei3GEV9Gj56Nv2bcqCV2B9ck"; // ここにあなたのSpotify APIトークンを入力してください

async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body),
  });
  return res.json();
}

async function getTopTracks() {
  return (
    await fetchWebApi("v1/me/top/tracks?time_range=long_term&limit=50", "GET")
  ).items;
}

button.addEventListener("click", async () => {
  document.getElementById("location").innerHTML = "";
  document.getElementById("today-weather").innerHTML = "";
  document.getElementById("weather-list").innerHTML = "";

  const ken = document.getElementById("kenName").value;
  const url = `https://www.jma.go.jp/bosai/forecast/data/forecast/${codeNum[ken]}.json`;
  await fetchData(url);

  // Spotify API
  document.querySelector(".spotify").innerHTML = ""; // Spotifyのトラック表示をクリア

  try {
    const topTracks = await getTopTracks();
    console.log(topTracks);

    // トラック名とプレビューURLを配列に格納
    const trackPreviews = [];
    for (let i = 0; i < topTracks.length; i++) {
      trackPreviews.push({
        name: topTracks[i].name,
        preview_url: topTracks[i].preview_url,
      });
    }

    // ランダムに1曲を選ぶ
    const randomTrack =
      trackPreviews[Math.floor(Math.random() * trackPreviews.length)];

    // 今日の天気情報の下にランダムなトップトラックを表示
    const spotifyContainer = document.querySelector(".spotify");
    const trackElement = document.createElement("div");
    trackElement.textContent = `今日のおすすめの曲は ${randomTrack.name}`;
    spotifyContainer.appendChild(trackElement);

    // オーディオプレーヤーにURLを設定して再生
    const audioPlayer = document.getElementById("audioPlayer");
    const audioSource = document.getElementById("audioSource");
    audioSource.src = randomTrack.preview_url;
    audioPlayer.load(); // オーディオソースを再読み込み
    audioPlayer.play(); // 音楽を再生
  } catch (error) {
    console.error("Error fetching top tracks:", error);
  }
});
// button.addEventListener("click", async () => {
//   document.getElementById("location").innerHTML = "";
//   document.getElementById("today-weather").innerHTML = "";
//   document.getElementById("weather-list").innerHTML = "";

//   const ken = document.getElementById("kenName").value;
//   const url = `https://www.jma.go.jp/bosai/forecast/data/forecast/${codeNum[ken]}.json`;
//   await fetchData(url);

//   // Spotify API
//   document.querySelector(".spotify").innerHTML = ""; // Spotifyのトラック表示をクリア

//   const token =
//     "BQDd1gXHZSEy9gXBwzsVQLF-s_NqhrNe_CPqBRmlcPQ_r2wMs9NnFE-sbqkK7p4t6STw9mTOknKhlRfNOMO8SNFtK5KfhwuxQdUybq7zajaJBq1F1ecwlIp_Tf8XQKQxEliWpLOXVMvB_8PpCtNO-ACJnJw8eX923Dcn4oBZsMnz5zTu3-fcOdgFETo_MNlpPnzL119R9bCy8EcMEAsLBwbCMHmxFmHJ6-3K_8SIzqFRQc1DOaT_P0JtE2ONjRWxApEW0CKy1Ue9v0nuZb6LyjfHQv3Z";

//   async function fetchWebApi(endpoint, method, body) {
//     const res = await fetch(`https://api.spotify.com/${endpoint}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       method,
//       body: JSON.stringify(body),
//     });
//     return res.json();
//   }

//   async function getTopTracks() {
//     return (
//       await fetchWebApi("v1/me/top/tracks?time_range=long_term&limit=50", "GET")
//     ).items;
//   }

//   // トップトラックを取得して表示
//   try {
//     const topTracks = await getTopTracks();
//     console.log(topTracks);

//     // トラック名を配列に格納
//     const trackNames = [];
//     for (let i = 0; i < topTracks.length; i++) {
//       trackNames.push(topTracks[i].name);
//     }

//     // ランダムに1曲を選ぶ
//     const randomTrack =
//       trackNames[Math.floor(Math.random() * trackNames.length)];

//     // 今日の天気情報の下にランダムなトップトラックを表示
//     const spotifyContainer = document.querySelector(".spotify");
//     const trackElement = document.createElement("div");
//     trackElement.textContent = `今日のおすすめの曲は${randomTrack}`;
//     spotifyContainer.appendChild(trackElement);
//   } catch (error) {
//     console.error("Error fetching top tracks:", error);
//   }
// });
// const button = document.getElementById("tenki");
// button.addEventListener("click", () => {
//   document.getElementById("location").innerHTML = "";
//   document.getElementById("today-weather").innerHTML = "";
//   document.getElementById("weather-list").innerHTML = "";

//   const ken = document.getElementById("kenName").value;
//   const url = `https://www.jma.go.jp/bosai/forecast/data/forecast/${codeNum[ken]}.json`;
//   fetchData(url);

//   // spotifyAPI

//   document.querySelector(".spotify").innerHTML = ""; // Spotifyのトラック表示をクリア

//   const spo = document.querySelector(".spotify");

//   const token =
//     "BQB_f4OVZL-FXyITqPJgCuAGSj-WXiMCETzPzU1lfrE25bWFrAe4jmhwkJirPqZ4s4Ng4IkTfZiFq_rN0gvNy-nlGFvLq0TtShIMX6qVW56UUAhS3a4275A0xjPeGW1YN8vDNboIdYVdPa6AZjfpGPVzy0vP9IRsdle9i1G5MSVpMIjKjCGdIX6cDnjJELDbJ8bLnlg0zVUxNmg7Vem9CI_Tnp1hSMlQPQsIQA2d3fk6EatHA34ZghzVLf3jzC9fTSVLRCOP66vA2UUbP6BRRP6J7U1-";
//   async function fetchWebApi(endpoint, method, body) {
//     const res = await fetch(`https://api.spotify.com/${endpoint}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       method,
//       body: JSON.stringify(body),
//     });
//     return res.json();
//   }

//   async function getTopTracks() {
//     return (
//       await fetchWebApi("v1/me/top/tracks?time_range=long_term&limit=50", "GET")
//     ).items;
//   }

//   // トップトラックを取得して表示
//   getTopTracks()
//     .then((topTracks) => {
//       console.log(topTracks);

//       // 各トラックの名前をコンソールに出力
//       for (let i = 0; i < topTracks.length; i++) {
//         console.log(topTracks[i].name);
//         const trackNames = [];
//         for (let i = 0; i < tracks.length; i++) {
//           trackNames.push(tracks[i].name);
//         }
//       }
//       console.log(tra);

//       // 今日の天気情報の下にトップトラックを表示
//       const todays = document.getElementById("today-weather");
//       topTracks.forEach((track) => {
//         const spo = document.querySelector(".spotify");
//         spo.textContent = `${track.name}`;
//         todays.appendChild(trackElement);
//       });
//     })
//     .catch((error) => {
//       console.error("Error fetching top tracks:", error);
//     });
// });

const dayList = ["日", "月", "火", "水", "木", "金", "土"];

// JSON取得
function fetchData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((weather) => {
      console.log(weather);
      // タイトル変更
      document.getElementById(
        "location"
      ).textContent = `${weather[1].publishingOffice}: ${weather[1].timeSeries[0].areas[0].area.name}`;

      // 要素を取得
      const todayWeather = document.getElementById("today-weather");
      const weatherList = document.getElementById("weather-list");

      // 最高気温と最低気温を取るための道具
      const isTodaysData = weather[0].timeSeries[2].timeDefines.length === 4;

      // 天気のコードを取得画像に使用？
      const weatherCodes = weather[0].timeSeries[0].areas[0].weatherCodes;
      const timeDefines = weather[0].timeSeries[0].timeDefines;
      const temps = weather[0].timeSeries[2].areas[0].temps;

      const weatherCodeList = [weatherCodes[0], weatherCodes[1]];
      const timeDefinesList = [timeDefines[0], timeDefines[1]];
      const tempsMinList = isTodaysData
        ? [temps[0] === temps[1] ? "--" : temps[0], temps[2]]
        : ["--", temps[0]];
      const tempsMaxList = isTodaysData
        ? [temps[1], temps[3]]
        : ["--", temps[1]];

      const startCount =
        weather[1].timeSeries[0].timeDefines.indexOf(timeDefines[1]) + 1;
      for (let i = startCount; i < startCount + 5; i++) {
        weatherCodeList.push(weather[1].timeSeries[0].areas[0].weatherCodes[i]);
        timeDefinesList.push(weather[1].timeSeries[0].timeDefines[i]);
        tempsMinList.push(weather[1].timeSeries[1].areas[0].tempsMin[i]);
        tempsMaxList.push(weather[1].timeSeries[1].areas[0].tempsMax[i]);
      }
      console.log(timeDefinesList);
      // 関数呼び出し今日の天気を表示
      displayWeather(
        todayWeather,
        0,
        timeDefinesList,
        weatherCodeList,
        tempsMaxList,
        tempsMinList,
        isTodaysData,
        true
      );

      // 関数の呼び出し他の日の天気を表示
      weatherCodeList.slice(1).forEach((el, i) => {
        displayWeather(
          weatherList,
          i + 1,
          timeDefinesList,
          weatherCodeList,
          tempsMaxList,
          tempsMinList,
          isTodaysData,
          false
        );
      });
    })
    .catch((error) => console.error("Error fetching weather data:", error));
}

function displayWeather(
  container,
  index,
  timeDefinesList,
  weatherCodeList,
  tempsMinList,
  tempsMaxList,
  isTodaysData,
  isToday
) {
  let dt = new Date(timeDefinesList[index]);
  let weekdayCount = dt.getDay();
  let m = ("00" + (dt.getMonth() + 1)).slice(-2);
  let d = ("00" + dt.getDate()).slice(-2);
  let dateStr = `${m}/${d}(${
    ["日", "月", "火", "水", "木", "金", "土"][weekdayCount]
  })`;

  let isNight = Number(index === 0 && !isTodaysData);
  let imgSrc = `https://www.jma.go.jp/bosai/forecast/img/${
    weatherCode[weatherCodeList[index]][isNight]
  }`;
  let weatherDescription = weatherCode[weatherCodeList[index]][2];
  let minTemp = tempsMinList[index] + "℃";
  let maxTemp = tempsMaxList[index] + "℃";

  // 一回目はtoday二回目の呼び出しでWeatherになる
  let weatherDataDiv = document.createElement("div");
  weatherDataDiv.className = isToday ? "todayWeather" : "weather";

  // 今日の天気の場合
  weatherDataDiv.innerHTML = `
        <div class="date">${dateStr}</div>
        <img class="weatherImg" src="${imgSrc}" alt="天気画像">
        <div class="weatherTelop">${weatherDescription}</div>
        <div>
            <span class="tempMin">${minTemp}</span>/<span class="tempMax">${maxTemp}</span>
        </div>
    `;
  container.appendChild(weatherDataDiv);
}
