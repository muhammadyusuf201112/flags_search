function allCountries(){
    fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((restcountries) => countryView(restcountries));
}


const btn=document.getElementById("btn");
const countries=document.getElementById("countries")
const select=document.getElementById("select")

btn.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
})

function countryView(davlatlar){
    countries.innerHTML='';
    for(let i=0; i<davlatlar.length; i++){
        const a=document.createElement("a")
        const country=document.createElement("div")
        const img=document.createElement("img")
        const countryText=document.createElement("div")
        const countryName=document.createElement("h2")
        const countryPopulation=document.createElement("p")
        const countryRegion=document.createElement("p")
        const countryCapital=document.createElement("p")
        img.src=davlatlar[i].flags.png;
        country.classList.add("country")
        countryText.classList.add("country-text")
        countryName.textContent=davlatlar[i].name.common;
        countryPopulation.innerHTML=`<b>Population:</b> ${davlatlar[i].population}`;
        countryRegion.innerHTML=`<b>Region:</b> ${davlatlar[i].region}`;
        countryCapital.innerHTML=`<b>Capital:</b> ${davlatlar[i].capital}`;
        countryText.appendChild(countryName);
        countryText.appendChild(countryPopulation);
        countryText.appendChild(countryRegion);
        countryText.appendChild(countryCapital);
        country.appendChild(img);
        country.appendChild(countryText);
        a.appendChild(country);
        countries.appendChild(a);


    }
}


async function getCountriesByRegion(region){
    const res=await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const davlatlar= await res.json();
    countryView(davlatlar);
}
select.addEventListener("change",(m)=>{
    if (m.target.value == "All") {
        allCountries()
    } else if {
        
    }
    getCountriesByRegion(m.target.value)

})