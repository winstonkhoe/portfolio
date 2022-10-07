const getRepoCategory = (evaluatedCategories: string[]) => {
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
        evaluatedCategory = evaluatedCategory.topic.name;
        for (const categoryObj of categories) {
            if (categoryObj.techs.find(tech => tech === evaluatedCategory)) {
                return categoryObj.category;
            }
        }
    }
    return "program";
}

export {getRepoCategory}