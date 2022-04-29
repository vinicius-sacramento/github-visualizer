import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'Teste',
    description: 'Forms in React',
    link: 'https://www.google.com'
}

export function RepositoryList() {
    return (
        <section className='repository-list'>
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem
                    repository={repository}
                />
            </ul>
        </section>
    )
}