import { model } from "./model"
import  './styles/main.css'
import { Site } from "./clasess/site"
import { Sidebar } from "./clasess/sitebar"


const site = new Site('#site')

site.render(model)

const updateCallback = newBlock => {
    model.push(newBlock)
    site.render(model)
}
new Sidebar('#panel', updateCallback )

