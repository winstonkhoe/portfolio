import TechItem from "./TechItem.jsx";
import { RepositoryCard, OverviewRepositoryCard } from "./RepositoryCard";
import { isMobile } from "react-device-detect";
import "../styles/main.scss";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaCode,
  FaCamera,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import type { Repository, Repositories } from "../models/Github.js";
import { Tab } from "./Tab.jsx";

const Home = (props: { repositories: Repositories }) => {
  const tabs = [
    {
      name: "Coder",
      children: <FaCode className="w-50 h-50 transition-all" />,
    },
    {
      name: "Photographer",
      children: <FaCamera className="w-50 h-50 transition-all" />,
    },
  ];

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
      image: isMobile ? "astro.png" : "astro-hero.png",
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

  const [currentStep, setCurrentStep] = useState(1);
  const [maxCountRepoPerLang, setMaxCountRepoPerLang] = useState(1);
  const [experienceVisibility, setExperienceVisibility] =
    useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("");
  const [hoverTech, setHoverTech] = useState<string>("");
  const [clickedTech, setClickedTech] = useState<string>("");
  const [activeRepos, setActiveRepos] = useState<Repository[]>([]);

  const activateTab = (tab: string) => {
    if (activeTab === "" && tab !== "") setCurrentStep(currentStep + 1);
    setActiveTab(tab);
  };

  const setActiveHover = (tech: string) => {
    setHoverTech(tech);
  };

  const setClickTech = (tech: string) => {
    setClickedTech(clickedTech === tech ? "" : tech);
  };

  const getRepositoryCount = (tech: string) => {
    let count = 0;
    for (const repository of props.repositories.nodes) {
      for (const node of repository.repositoryTopics.nodes) {
        if (node.topic.name === tech) {
          count++;
        }
      }
    }
    if (maxCountRepoPerLang < count) setMaxCountRepoPerLang(count);
    return count;
  };

  const ExperienceToggle = () => {
    return (
      <div className="mt-8 mb-4 lg:mt-0 lg:mb-48">
        <button
          className={`group bg-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50 rounded-lg px-4 py-2`}
          onClick={() => {
            setExperienceVisibility(!experienceVisibility);
          }}
        >
          <span
            className={`${
              experienceVisibility === false
                ? "group-hover:text-green-500/90"
                : "group-hover:text-rose-700/70"
            }`}
          >
            {experienceVisibility === false ? "Show" : "Hide"}
          </span>
          {` Experience`}
        </button>
      </div>
    );
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

  interface Pages {
    [key: string]: JSX.Element;
  }

  const secondPage: Pages = {
    Coder: (
      <div className="h-full w-full transition-all duration-1000">
        <section
          id="tech-stack-container"
          onMouseDown={(e) => {
            const target = e.target as HTMLInputElement;
            if (target.id === "tech-stack-container") setClickedTech("");
          }}
          className="lg:min-h-screen flex flex-col justify-center items-center"
        >
          {!isMobile && <ExperienceToggle />}
          <div className="container">
            <div className="top-container flex flex-col lg:grid grid--columns">
              <div className="profile-container h-[50vh] relative flex lg:h-full justify-center items-center overflow-hidden">
                <div
                  className={`flex w-full h-full absolute flex-col justify-center items-center transition-all duration-300 ${
                    !isMobile && activeRepos.length > 0
                      ? "-translate-x-full"
                      : ""
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
                    !isMobile && activeRepos.length > 0
                      ? "translate-x-0"
                      : "translate-x-full"
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
              {isMobile && (
                <div className="flex w-full justify-center items-center">
                  <ExperienceToggle />
                </div>
              )}
              <div className="techs-container mb-32 lg:mb-0">
                {techs.map((tech, index) => {
                  return (
                    <>
                      <div
                        className={`relative tech-item h-[5rem] sm:h-[10rem] lg:w-full lg:h-full
              transition-all ease-in-out duration-300 cursor-pointer
              hover:highlight-shadow 
              ${
                hoverTech === "" && clickedTech === tech.name
                  ? "highlight-shadow scale-[1.1]"
                  : ""
              }
              ${
                isMobile && clickedTech === tech.name
                  ? "w-full"
                  : "w-[5rem] sm:w-[10rem] hover:scale-[1.1]"
              }
            `}
                        style={{
                          boxShadow: `0 0 .5rem hsl(95 94% 48% / ${
                            experienceVisibility === false
                              ? 0
                              : (getRepositoryCount(tech.name) /
                                  maxCountRepoPerLang) *
                                1.0
                          })`,
                        }}
                        onMouseEnter={() => {
                          setActiveHover(tech.name);
                        }}
                        onMouseLeave={() => {
                          setActiveHover("");
                        }}
                        onMouseDown={() => {
                          setClickTech(tech.name);
                        }}
                      >
                        <TechItem
                          key={index}
                          name={tech.name}
                          image={tech.image}
                          style={`flex justify-center items-center w-full h-full transition-all ease-in-out duration-300`}
                        />
                        <div
                          className={`absolute w-full h-full flex justify-center items-center bg-black/50 z-3 transition-all duration-300 ease-in-out ${
                            isMobile && clickedTech === tech.name
                              ? "opacity-1"
                              : "opacity-0"
                          }`}
                        >
                          <h2 className="text-3xl">{tech.name}</h2>
                        </div>
                      </div>
                      {isMobile && (
                        <div
                          className={`flex flex-col overflow-y-auto bg-black/50 transition-all ease-in-out duration-300 ${
                            isMobile && clickedTech === tech.name
                              ? "w-full h-[30vh] p-5"
                              : "w-0 h-0 p-0"
                          }`}
                        >
                          {clickedTech === tech.name &&
                            activeRepos.map((repo, index) => {
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
                      )}
                    </>
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
      </div>
    ),
    Photographer: <></>,
  };

  return (
    <>
      <section
        id="tab"
        className={`flex flex-col w-full justify-center items-center transition-all duration-[1000ms] delay-300 touch-none ${
          currentStep == 1 ? "h-[100vh]" : "h-[10rem]"
        }`}
      >
        <div
          className={`flex flex-col w-full justify-center items-center transition-all duration-150 ${
            currentStep > 1 ? "opacity-0 h-0" : "opacity-1"
          }`}
        >
          <h2>What do you want to see?</h2>
          <h1 className="text-3xl">Winston Khoe</h1>
          <h2>as a</h2>
        </div>
        <div className="flex flex-wrap w-full justify-around items-center px-8 py-4 rounded-lg">
          {tabs.map((tab, index) => {
            return (
              <>
                <Tab
                  name={tab.name}
                  key={index}
                  isActiveTab={activeTab === tab.name}
                  setActivateTab={activateTab}
                >
                  {tab.children}
                </Tab>
                {/* {index < tabs.length - 1 ? <h6 className="flex-none">or</h6> : ""} */}
              </>
            );
          })}
        </div>
      </section>
      {currentStep >= 2 && secondPage[activeTab]}
    </>
  );
};

export default Home;
