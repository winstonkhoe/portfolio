import { getRepoCategory } from "../misc/RepoCategory";
import type { RepositoryTopic, Topic } from "../models/Github";
import "../styles/main.scss";

const RepositoryCard = (props: {
  name: string;
  techs: RepositoryTopic[];
  description: string;
}) => {
  const category = getRepoCategory(props.techs);
  return (
    <div className="card-repository rounded-xl p-4 flex-auto bg-color[#fff]">
      <div className="flex w-full justify-end">
        {category ? (
          <a
            href="#"
            className="category-tag font-bold text-sm mb-3 px-2 py-1 rounded-xl border-2 border-indigo-500/100 text-indigo-500 hover:text-white hover:bg-indigo-500"
          >
            {category}
          </a>
        ) : null}
      </div>
      <h2>{props.name}</h2>
      <p className="my-5 break-words w-full flex-auto text-base opacity-75">
        {props.description}
      </p>
      <div className="flex w-full flex-wrap justify-around tech-container">
        {props.techs
          ? props.techs.map((tech, index) => {
              return <TechItem tech={tech.topic.name} key={index} />;
            })
          : null}
      </div>
    </div>
  );
};

const OverviewRepositoryCard = (props: {
  name: string;
  techs: RepositoryTopic[];
  description: string;
}) => {
  const category = getRepoCategory(props.techs);
  const description =
    props.description.indexOf(".") !== -1
      ? props.description.split(".")[0] + "."
      : props.description;
  return (
    
      <div className="overview-repository-card flex flex-col justify-center items-center w-full rounded-xl p-4 flex-auto">
        <div className="flex w-full justify-end">
          {category ? (
            <a
              href="#"
              className="category-tag font-bold text-sm mb-3 px-2 py-1 rounded-xl border-2 border-indigo-500/100 text-indigo-500 hover:text-white hover:bg-indigo-500"
            >
              {category}
            </a>
          ) : null}
        </div>
        <a href={`#`}><h2 className="transition-all hover:text-neon">{props.name}</h2></a>
        <p className="my-3 break-words text-sm flex-auto text-center">{description}</p>
      </div>
    
  );
};

const TechItem = (props: { tech: string }) => {
  return (
    <a
      className="px-3 py-2 rounded-3xl text-base tech-item text-white"
      href={`#`}
    >
      {props.tech}
    </a>
  );
};

export { RepositoryCard, OverviewRepositoryCard };
