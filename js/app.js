const countries = document.getElementById('countries')
document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})
const fetchData = async () => {
    try {
        const res = await fetch('https://restcountries.com/v3.1/all')
        const data = await res.json()
        flag(data)
        userForm(data)
    } catch (error) {
        console.log(error)
    }
}

const flag = data => {
    let element = ''
    data.forEach(item => {
        element += `
        <a class="countryLink" href="pais.html?name=${item.name.common}">
        <article>
        <img src="${item.flags.svg}" alt="">
        <h3>${item.name.common}</h3>
        <p><b>Population:</b> ${item.population}</p>
        <p><b>Capital:</b>${item.capital}</p>
        <p><b>Region:</b>${item.region}</p>   
    </article>
    </a>`

    });
    countries.innerHTML = element
}

const form = document.getElementById('form');
const inputForm = document.getElementById('inputForm')

const userForm = data => {
    form.addEventListener('keyup', async (e) => {
        e.preventDefault()
        const letraCliente = inputForm.value.toLowerCase()
        //console.log(letraCliente)
        const arrayFilter = data.filter(item => {

            const letraApi = item.name.common.toLowerCase()
            console.log("letraApi " +letraApi)
            console.log("letraCliente " +letraCliente)
            if (letraApi.indexOf(letraCliente) !== -1) {
                return item
            }

        })
        flag (arrayFilter)
    })
}
