


// const routes = {

//     "":autService,
//     "#/":autService

// }


// export const router = () =>{

//     const hash = window.location.hash





// }
import { render } from "../app.js";
import { navbar } from "../components/navbar.js";

export function router(){

    const hash = location.hash || '#/login'

switch (hash) {
    case '#/login':
    render('<p>te</p>')       
        break;

    default:
        alert('error')
        break;
}

}
