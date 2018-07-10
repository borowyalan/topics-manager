import TopicModel from '../models/TopicModel';

export default class TopicService {

    //TODO: add tests when backend is "added" (called paths)
    //temp
    static people = [
        {email: 'john@doe.com', name: 'John Doe 1'},
        {email: 'john_alpha@doe.com', name: 'John Doe 2'},
        {email: 'john_omega@doe.com', name: 'John Doe 3'}
    ];

    static topics = [
        TopicModel.fromBackendData(
            {
                title: 'React Basic',
                description: 'Lorem ipsum',
                trainers: TopicService.people,
                members: TopicService.people,
                likes: 10,
            }),
        TopicModel.fromBackendData({
            title: 'React Native Basic',
            description: 'Lorem ipsum',
            trainers: TopicService.people,
            members: TopicService.people,
            likes: 39,
        }),
        TopicModel.fromBackendData({
            title: 'React + Redux',
            description: 'Lorem ipsum',
            trainers: TopicService.people,
            members: TopicService.people,
            likes: 13,
        }),
        TopicModel.fromBackendData({
            title: 'React + Redux + Thunk',
            description: 'Lorem ipsum',
            trainers: TopicService.people,
            members: TopicService.people,
            likes: 0,
        }),
    ];

    static async getSubmittedTopics() {
        return this.topics;
    }

    static async getPastTopics() {
        return this.topics;
    }

    static submitTopic(topic, author) {
        // eslint-disable-next-line no-undef
        const db = firebase.database();
        const newTopicKey = db.ref().child('topics').push().key;
        //temp; uncomment to push something to realtime database
        db.ref('topics/' + newTopicKey).set({
            ...topic, author: author.strip(), trainers: [], users: []
        });
    }
}
