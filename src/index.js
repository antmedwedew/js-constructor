import {model} from './js/model'
import {App} from './classes/app'
import {openSidebar} from './js/open-sidebar'
 
//import styles 
import './styles/style.css'

// call function openSidebar
openSidebar()

new App(model).init()








