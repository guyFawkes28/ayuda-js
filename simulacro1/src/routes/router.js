import { detailTop } from "../pages/detail-top"

const routes = {

/*     "":autService,
    "#/":autService, */
    "#/detailTop":detailTop,

}


export const router = () =>{

    const hash = window.location.hash
    const app = document.getElementById('app')

    const page = routes[hash] || routes[""]

    app.innerHTML = page
}