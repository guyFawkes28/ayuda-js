


// const routes = {

//     "":autService,
//     "#/":autService

// }


// export const router = () =>{

//     const hash = window.location.hash





// }
import { render } from "../app.js";
import { navbar } from "../components/navbar.js";
import { CreateProject } from "../pages/CreateProject.js";
import { Dashboard } from "../pages/Dashboard.js";
import { NotFound } from "../pages/NotFound.js";

export function router(){

    const hash = location.hash || '#/login'

switch (hash) {
    case '#/login':
    render('<p>tedfsdfsdfds</p>')       
        break;
    case '#/dashboard':
             render(Dashboard())
        break;
    case '#/create-project':
             render(CreateProject())
        break;

    default:
        render(NotFound())
        break;
}

}
