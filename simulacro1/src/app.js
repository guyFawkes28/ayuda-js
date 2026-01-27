import { router } from "./routes/router.js"
import { navbar } from "./components/navbar.js"
import { Footer } from "./components/Footer.js"
import {CreateProject} from './pages/CreateProject.js'


const app = document.getElementById('app')

export function render(content) {
    

app.innerHTML = `
${navbar()}
${content}
${Footer()}

`

}

window.addEventListener('hashchange',router)
window.addEventListener('load',router)
