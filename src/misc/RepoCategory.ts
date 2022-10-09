import type { RepositoryTopic } from "../models/Github";

const getRepoCategory = (evaluatedCategories: RepositoryTopic[]) => {
    const categories = [
        {
            category: "game",
            techs: ["unity"]
        },
        {
            category: "web app",
            techs: ["laravel", "nextjs", "reactjs", "angular", "asp-net", "threejs"]
        },
        {
            category: "mobile",
            techs: ["android", "ios", "swift", "flutter"]
        },
        {
            category: "desktop app",
            techs: ["electronjs"]
        },
    ]
    for (let evaluatedCategory of evaluatedCategories) {
        const topicName: string = evaluatedCategory.topic.name;
        for (const categoryObj of categories) {
            if (categoryObj.techs.find(tech => tech === topicName)) {
                return categoryObj.category;
            }
        }
    }
    return "program";
}

export {getRepoCategory}