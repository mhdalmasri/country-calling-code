function search() {
  const c = document.getElementById("code").value;
  const url = `https://restcountries.eu/rest/v2/callingcode/${c}`
  fetch(url)
    .then(response => response.json())
    .then(data => {console.log(data)
  let country = document.getElementById("js")
  country.innerHTML = `<h1>${data[0].name} ==> ${data[0].alpha2Code}</h1>
  <img style="width:100px" src="${data[0].flag}">
  `})
}