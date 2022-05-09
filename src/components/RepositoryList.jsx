import { RepositoryItem } from "./RepositoryItem";

const repository = [{
        name: "Unform",
        description: "Formulários em React JS",
        link: "https://github.com/unform/unform"
    },
    {
        name: "Unform 2",
        description: "Formulários em React JS",
        link: "https://github.com/unform/unform"
    },
    {
        name: "Unform",
        description: "Formulários em React JS",
        link: "https://github.com/unform/unform"
    }]


export function RepositoryList(){
    return (
        <>
            <section className="repository-list">
                <h1>Lista de repositórios</h1>
                <ul>
                    <RepositoryItem repository={repository[0]}/>
                    <RepositoryItem repository={repository[1]}/>
                    <RepositoryItem repository={repository}/>
                    <RepositoryItem repository={repository}/>
                </ul>
            </section>
        </>
    )
}