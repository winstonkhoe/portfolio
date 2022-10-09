import TechItem from "./TechItem.jsx";
import { RepositoryCard, OverviewRepositoryCard } from "./RepositoryCard";
// import "../styles/index.scss";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import type { Repository, Repositories } from "../models/Github.js";

const Home = (props: {
  repositories: Repositories
}) => {
  const [hoverTech, setHoverTech] = useState("");
  const [clickedTech, setClickedTech] = useState("");
  const [activeRepos, setActiveRepos] = useState<Repository[]>([]);
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

  const setActiveHover = (tech: string) => {
    // console.log(`tech: ${tech}`);
    setHoverTech(tech);
    // if (tech === "") {
    //   setActiveRepos([]);
    // } else {
    //   let tempRepos = [];
    //   console.log(props.repositories);
    //   for (const repository of props.repositories.nodes) {
    //     console.warn(repository);
    //     for (const node of repository.repositoryTopics.nodes) {
    //       if (node.topic.name === tech) {
    //         tempRepos.push(repository);
    //       }
    //     }
    //   }
    //   setActiveRepos(tempRepos);
    // }
  };

  const setClickTech = (tech: string) => {
    setClickedTech(clickedTech === tech ? "" : tech);
  };

  useEffect(() => {
    const activeTech = hoverTech === "" ? clickedTech : hoverTech;
    if (activeTech === "") {
      setActiveRepos([]);
    } else {
      let tempRepos: Repository[] = [];
      for (const repository of props.repositories.nodes) {
        for (const node of repository.repositoryTopics.nodes) {
          if (node.topic.name === activeTech) {
            tempRepos.push(repository);
          }
        }
      }
      setActiveRepos(tempRepos);
    }
  }, [hoverTech, clickedTech]);

  return (
    <>
      <section
        id="tech-stack-container"
        onMouseDown={(e) => {
          const target = e.target as HTMLInputElement;
          if (target.id === "tech-stack-container") setClickedTech("");
        }}
        className="lg:min-h-screen flex justify-center items-center"
      >
        <div className="container">
          <div className="feature-grid-container grid grid--columns">
            <div className="profile-container relative flex h-full justify-center items-center overflow-hidden">
              <div
                className={`flex w-full h-full absolute flex-col justify-center items-center transition-all duration-300 ${
                  activeRepos.length > 0 ? "-translate-x-full" : ""
                }`}
              >
                <div className="group rounded-full relative flex justify-center items-center z-[999] overflow-hidden h-48 w-48">
                  <img
                    className="w-full h-full object-cover transition-all duration-[500ms] group-hover:scale-150 group-hover:blur-[2px]"
                    src="images/profile.jpg"
                    alt=""
                  />
                  <h6 className="absolute text-xl opacity-0 select-none transition-all duration-[500ms] group-hover:opacity-100">
                    ☕relax
                  </h6>
                </div>
                <span className="flex justify-center flex-col items-center mt-10">
                  <h2 className={`text-4xl`}>winston khoe</h2>
                </span>
                <div className="flex large-gap">
                  <a href="https://github.com/winstonkhoe" target={"_blank"}>
                    <FaGithub className="w-8 h-8 transition-all hover:opacity-50" />
                  </a>
                  <a
                    href="https://www.instagram.com/winkhoee"
                    target={"_blank"}
                  >
                    <FaInstagram className="w-8 h-8 transition-all hover:opacity-50" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/winston-khoe/"
                    target={"_blank"}
                  >
                    <FaLinkedin className="w-8 h-8 transition-all hover:opacity-50" />
                  </a>
                </div>
              </div>
              <div
                className={`flex absolute right-0 w-full h-full flex-col items-center justify-start transition-all duration-300 p-5 ${
                  activeRepos.length > 0 ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <h2 className="text-2xl font-bold">
                  {hoverTech !== "" ? hoverTech : clickedTech}
                </h2>
                <div className="overview-repo-container flex flex-col w-full overflow-y-auto px-2">
                  {activeRepos.map((repo, index) => {
                    return (
                      <OverviewRepositoryCard
                        key={index}
                        name={repo.name}
                        description={repo.description}
                        techs={repo.repositoryTopics.nodes}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="grid feature-grid">
              {techs.map((tech, index) => {
                return (
                  <TechItem
                    key={index}
                    name={tech.name}
                    image={tech.image}
                    hover={setActiveHover}
                    click={setClickTech}
                    style={
                      hoverTech === "" && clickedTech === tech.name
                        ? "highlight-shadow"
                        : ""
                    }
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center pb-32 flex-col">
        <div className="flex flex-col items-center my-8">
          <h1 className="text-4xl">Projects</h1>
          <h6 className="text-base opacity-75">{`${props.repositories.nodes.length} Project`}</h6>
        </div>
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
