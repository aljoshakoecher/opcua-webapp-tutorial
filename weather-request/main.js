import axios from "axios";

const promise = axios.get("https://goweather.herokuapp.com/weather/Hamburg")

promise.then(res => console.log(res.data)).catch(err => console.log(`There was an error: ${err}`))