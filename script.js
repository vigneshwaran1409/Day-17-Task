fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json())
  .then((ele) => {
    for (i = 0; i < ele.length; i++) {
      console.log(ele[i]);
      const div = document.createElement("div");
      div.innerHTML = `<div class="row col-lg-4 col-sm-12">
 
    <div class="card">
    <div class="card-header">${ele[i].name.common}</div>
      <img src="${ele[i].flags.png}" class="card-img-top" alt="API Flags">
      <div class="card-body">
      <p class="card-text">Capital:${ele[i].capital}</p>
      <p class="card-text">Region:${ele[i].region}</p>
      <p class="card-text">Country Code:${ele[i].cca2}</p>
      </div>
    <button class="btn btn-primary" id="button" >Click for Weather</button>
    </div>
  </div>`;
      document.body.append(div);
    }
  });
