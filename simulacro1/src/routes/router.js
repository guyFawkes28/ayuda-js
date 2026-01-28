


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
import { Error } from "../pages/Error.js";
import { Loading } from "../pages/Loading.js";

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
    case '#/loading':
        render(Loading())
        break;
    default:
        render(Error())
        break;
}

}

/**
 // routes/router.js
import { render } from "../app.js";
import { navbar } from "../components/navbar.js";
import { CreateProject } from "../pages/CreateProject.js";
import { Dashboard} from "../pages/Dashboard.js";
import { Error } from "../pages/Error.js";
import { Loading } from "../pages/Loading.js";
import { getProjects } from "../services/projectsServices.js";

export async function router(){

    const hash = location.hash || '#/dashboard'

    switch (hash) {
        case '#/login':
            render('<p>tedfsdfsdfds</p>')       
            break;
            
        case '#/dashboard':
        
            const projects = await getProjects()
            render(Dashboard(projects))
            break;
            
        case '#/create-project':
            render(CreateProject())
            break;
            
        case '#/loading':
            render(Loading())
            break;
            
        default:
            render(Error())
            break;
    }
}
 */