function search() {
  const c = document.getElementById("code").value;
  fetch(`https://restcountries.eu/rest/v2/callingcode/${c}`)
    .then(response => response.json())
    .then(data => { console.log(data)
     document.getElementById("js").innerHTML = `<h1>${data[0].name} ==> ${data[0].alpha2Code}</h1>
     <img style="width:100px" src="${data[0].flag}">`
    })}