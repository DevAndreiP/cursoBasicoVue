const url = "https://api.coincap.io/v2/assets?limit=20";
const url_solo = "https://api.coincap.io/v2";
function getAssets() {
  return fetch(`${url}`)
    .then((res) => res.json())
    .then((res) => res.data);
}
function getAsset(coin) {
  return fetch(`${url_solo}/assets/${coin}`)
    .then((res) => res.json())
    .then((res) => res.data);
}
function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();
  return fetch(
    `${url_solo}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  ).then(res=> res.json()).then(res=>res.data)
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
};
