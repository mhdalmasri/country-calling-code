function search() {
  const S = document.querySelector("#code").value;
  let url = `https://restcountries.eu/rest/v2/callingcode/${S}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      if (data.status == 404) {
        document.querySelector('#js').innerHTML = `Sorry, The code does not exist.`
      } else {
        let show = []
        for (let i = 0; i < data.length; i++) {
          show.push(`
  <tbody>
    <tr>
      <th scope="row">${i}</th>
      <td><img style="width:50px;display:inline" src="${data[i].flag}"></td>
      <td>${data[i].name} (${data[i].alpha2Code})</td>
      <td>${data[i].region}</td>
      <td>${data[i].capital}</td>
      <td>${data[i].population}</td>
      <td>${data[i].currencies[0].name} ${data[i].currencies[0].symbol}</td>
    </tr>
  </tbody>

   `)
        }
        document.querySelector("#js").innerHTML = `<table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Flag</th>
            <th scope="col">Name</th>
            <th scope="col">Region</th>
            <th scope="col">Capital</th>
            <th scope="col">Population</th>
            <th scope="col">Currency</th>
          </tr>
        </thead>
        ${show.join('')}
        </table>`
      }
    })
}



// class country {
//   constructor() {
//     this.init1()
//     this.init2()

//   }
//   init1() {
//     const name = document.querySelector("#name").value;
//     fetch(`https://restcountries.eu/rest/v2/name/${name}`)
//       .then(response => response.json())
//       .then(countries => 
//         console.log(countries)

//       )
//   }
//   init2() {
//     let list="";
//     const code = document.querySelector("#code").value;
//     fetch(`https://restcountries.eu/rest/v2/callingcode/${code}`)
//       .then(response => response.json())
//       .then(countries => {
//         console.log(countries)
//         countries.forEach(count => list = `<h1>${data[0].name} (${data[0].alpha2Code})</h1>
//     <h1>Is a country in ${data[0].region}.. The capital is ${data[0].capital}.. The population is ${data[0].population}.. They called ${data[0].demonym}.. speak ${data[0].languages[0].name} and use ${data[0].currencies[0].name} ${data[0].currencies[0].symbol}.. The calling code +${data[0].callingCodes[0]}</h1>
//     <img style="width:100px" src="${data[0].flag}">`)
//     return list.join("")
//     document.querySelector("#js").innerHTML = appendChild(show);
//       })
//   }

//   }

// const newCountry = new country()
