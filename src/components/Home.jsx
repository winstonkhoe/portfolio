import TechItem from "./TechItem.jsx";
import '../styles/index.scss';
import { useState } from "react";

const Home = (props) => {
    const [active, setActive] = useState('')
    const techs = [
        {
          "image": "android.png",
          "name": "android"
        },
        {
          "image": "nextjs.png",
          "name": "nextjs"
        },
        {
          "image": "bootstrap.svg",
          "name": "bootstrap"
        },
        {
          "image": "angular.png",
          "name": "angular"
        },
        {
          "image": "tensorflow.png",
          "name": "tensorflow"
        },
        {
          "image": "mysql.png",
          "name": "mysql"
        },
        {
          "image": "flutter.png",
          "name": "flutter"
        },
        {
          "image": "golang.png",
          "name": "golang"
        },
        {
          "image": "astro-hero.png",
          "name": "astro"
        },
        {
          "image": "laravel.png",
          "name": "laravel"
        },
        {
          "image": "tailwind.png",
          "name": "tailwind"
        },
        {
          "image": "graphql.png",
          "name": "graphql"
        },
        {
          "image": "c-sharp.webp",
          "name": "csharp"
        },
        {
          "image": "firebase-white.png",
          "name": "firebase"
        },
    ]

    const setActiveHover = (tech) => {
        setActive(tech)
    }
    
    return (
        <section>
            <div className="container">
                <div className="feature-grid-container grid grid--columns">
                    <div className="flex flex-col justify-center items-center feature-grid-text">
                        <img className="rounded-full object-cover h-48 w-48 overflow-hidden" src="images/profile.jpg" alt=""/>
                        <span className="flex justify-center flex-col items-center mt-10">
                        <h2 className="text-4xl text-compressed">winston khoe</h2>
                            <h2 className="text-4xl text-compressed">Active {active}</h2>
                        </span>
                        <div className="flex large-gap">
                            {props.childrens}
                        </div>
                    </div>
                    <div className="grid feature-grid">
                        {techs.map((tech) => {
                            return <TechItem name={tech.name} image={tech.image} func={setActiveHover} />
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;