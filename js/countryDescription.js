const countries = document.getElementById('countries')
const query = new URLSearchParams(window.location.search)
const params = query.get('name')
console.log(params)

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})
const fetchData = async () => {
    try {
        const res = await fetch('https://restcountries.com/v3.1/all')
        const data = await res.json()

        const dataFilter = data.filter(item => item.name.common === params)

        flag(dataFilter)
        userForm(data)

    } catch (error) {
        console.log(error)
    }
}

const flag = data => {
    let element = ''
    data.forEach(item => {
        element += `
        
                <div class="countries-container">
                    <img src="${item.flags.svg}" alt="">
                </div>
                <div class="description">
                <h2>${item.name.common}</h2>
                <section>
                    <div class="col-left">
                    <p><b>Native Name:</b> ${item.name.nativeName.official}</p>
                    <p><b>Popularion:</b> ${item.population}</p>
                    <p><b>Region:</b> ${item.region}</p>
                    <p><b>Sub Region:</b> ${item.subregion}</p>
                    <p><b>capital:</b>${item.capital} </p>
                    </div>
                    <div class="col-right">
                        <p><b>Top Level Domain</b>${item.tld} </p>
                        <p><b>Currencies:</b>${item.currencies} </p>
                        <p><b>Lenguages:</b>${item.hun} </p>
                    </div>
                </section>

                    <div class="borderCountries">
                        <p><b>Border Countries:</b></p>
                        <p>${item.borders}</p>
                    </div>
                </div>
            `

    });
    countries.innerHTML = element
}