interface Language {
    name: string;
    color?: string;
}

interface LanguageConnection {
    nodes: Language[];
}

interface Topic {
    name: string;
}

interface RepositoryTopic {
    topic: Topic;
}

interface RepositoryTopicConnection {
    nodes: RepositoryTopic[];
}

interface Repository {
    name: string;
    url: string;
    description: string;
    languages: LanguageConnection;
    repositoryTopics: RepositoryTopicConnection;
}

interface Repositories {
    nodes: Repository[];
    totalCount: number;
}


export type { Language, LanguageConnection, RepositoryTopic, RepositoryTopicConnection, Topic, Repository, Repositories }