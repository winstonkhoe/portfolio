import { getRepoCategory } from "../misc/RepoCategory";
import "../styles/index.scss";

const RepositoryCard = (props: {
    name: string,
    techs: string[],
    description: string
}) => {
    const category = getRepoCategory(props.techs);
    return (
        <div className="card-repository relative rounded-xl p-4 flex-auto">
            <div className="flex w-full justify-end">
                {category ? <a href="#" className="category-tag font-bold text-sm mb-3 px-2 py-1 rounded-xl border-2 border-indigo-500/100 text-indigo-500 hover:text-white hover:bg-indigo-500">{category}</a> : null}
            </div>
            <h2>{props.name}</h2>
            <p className="my-5 break-words w-full flex-auto">{props.description}</p>
            <div className="flex w-full flex-wrap justify-around tech-container">
                {props.techs ? props.techs.map((tech, index) => {
                    return <TechItem tech={tech.topic.name} key={index} />
                }) : null}
            </div>
        </div>
    )
}

const OverviewRepositoryCard = (props: {
    name: string,
    description: string
}) => {
    return (
        <div className="card-repository relative rounded-xl p-4 flex-auto">
            <div className="flex w-full justify-end">
                {category ? <a href="#" className="category-tag font-bold text-sm mb-3 px-2 py-1 rounded-xl border-2 border-indigo-500/100 text-indigo-500 hover:text-white hover:bg-indigo-500">{category}</a> : null}
            </div>
            <h2>{props.name}</h2>
            <p className="my-5 break-words w-full flex-auto">{props.description}</p>
            <div className="flex w-full flex-wrap justify-around tech-container">
                {props.techs ? props.techs.map((tech, index) => {
                    return <TechItem tech={tech.topic.name} key={index} />
                }) : null}
            </div>
        </div>
    )
}

const TechItem = (props: {
    tech: string
}) => {
    return (
        <a className="px-3 py-2 rounded-3xl text-base tech-item text-white" href={`/${props.tech}`}>
            {props.tech}
        </a>
    )
}

export default RepositoryCard;

