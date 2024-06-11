export class ProjectsDataService {

    constructor() { }

    projects = [
        {
            name: "Join",
            img: "../../assets/img/join.png",
            img_mobile: "../../assets/img/join2.png",
            skills: "Javascript | HTML | CSS | Firebase",
            description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories."
        },
        {
            name: "El Pollo Loco",
            img: "../../assets/img/el_pollo_loco.png",
            skills: "Javascript | HTML | CSS",
            description: "2D jump and run game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen."
        },
        {
            name: "Pokédex",
            img: "../../assets/img/pokedex.png",
            skills: "Javascript | HTML | CSS | Api",
            description: "A simple Pokémon library based on the PokéAPI, which provides and catalogues pokemon information."
        }
    ]

}