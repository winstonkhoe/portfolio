import TechItem from "./TechItem.jsx";
import { RepositoryCard, OverviewRepositoryCard } from "./RepositoryCard.tsx";
import "../styles/index.scss";
import { useState } from "react";

const Home = (props) => {
  const [active, setActive] = useState("");
  const [activeRepos, setActiveRepos] = useState([]);
  const techs = [
    {
      image: "android.png",
      name: "android",
    },
    {
      image: "nextjs.png",
      name: "nextjs",
    },
    {
      image: "bootstrap.svg",
      name: "bootstrap",
    },
    {
      image: "angular.png",
      name: "angular",
    },
    {
      image: "tensorflow.png",
      name: "tensorflow",
    },
    {
      image: "mysql.png",
      name: "mysql",
    },
    {
      image: "flutter.png",
      name: "flutter",
    },
    {
      image: "golang.png",
      name: "go",
    },
    {
      image: "astro-hero.png",
      name: "astro",
    },
    {
      image: "laravel.png",
      name: "laravel",
    },
    {
      image: "tailwind.png",
      name: "tailwindcss",
    },
    {
      image: "graphql.png",
      name: "graphql",
    },
    {
      image: "c-sharp.webp",
      name: "csharp",
    },
    {
      image: "firebase-white.png",
      name: "firebase",
    },
  ];

  const setActiveHover = (tech) => {
    console.log(`tech: ${tech}`);
    setActive(tech);
    if (tech === "") {
      setActiveRepos([]);
    } else {
      let tempRepos = [];
      console.log(props.repositories);
      for (const repository of props.repositories.nodes) {
        console.warn(repository);
        for (const node of repository.repositoryTopics.nodes) {
          if (node.topic.name === tech) {
            console.log(tech);
            console.log(node.topic.name);
            tempRepos.push(repository);
          }
        }
      }
      setActiveRepos(tempRepos);
      console.log(tempRepos);
    }
  };
  // console.log(props.repositories.nodes)

  return (
    <>
      <section>
        <div className="container">
          <div className="feature-grid-container grid grid--columns">
            <div className="profile-container overflow-y-auto flex flex-col justify-center items-center">
              {activeRepos.length === 0 ? (
                <div className="flex flex-col justify-center items-center">
                  <img
                    className="rounded-full object-cover h-48 w-48 overflow-hidden"
                    src="images/profile.jpg"
                    alt=""
                  />
                  <span className="flex justify-center flex-col items-center mt-10">
                    <h2 className="text-4xl text-compressed">winston khoe</h2>
                    <h2 className="text-4xl text-compressed">
                      Active {active}
                    </h2>
                  </span>
                  <div className="flex large-gap">{props.childrens}</div>
                </div>
              ) : (
                activeRepos.map((repo, index) => {
                  return (
                    <OverviewRepositoryCard
                      key={index}
                      name={repo.name}
                      description={repo.description}
                      techs={repo.repositoryTopics.nodes}
                    />
                  );
                })
              )}
            </div>

            <div className="grid feature-grid">
              {techs.map((tech) => {
                return (
                  <TechItem
                    name={tech.name}
                    image={tech.image}
                    func={setActiveHover}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center my-64 flex-col">
        <div className="flex w-10/12 flex-wrap justify-center">
          {props.repositories.nodes.map((repo, index) => {
            return (
              <RepositoryCard
                key={index}
                name={repo.name}
                description={repo.description}
                techs={repo.repositoryTopics.nodes}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
