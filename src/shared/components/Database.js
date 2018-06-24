import React from 'react';
import TopicModel from '../models/TopicModel';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getTopics, topicsFetched} from '../../actions/topic.actions';

class Database extends React.Component{
    componentWillMount() {
    // eslint-disable-next-line no-undef
        const db = firebase.database();
        const refA = db.ref('topics');



        var newTopicKey = db.ref().child('topics').push().key;
        //temp; uncomment to push something to realtime database
        /*
        db.ref('topics/' + newTopicKey).set({
            title: 'Awesome WarsawJS Workshop',
            describe: 'Some Supah Title!'
        });
        */

        refA.on('value', (snapshot) => {
            const topics = Object.entries(snapshot.val()).map((el) => TopicModel.fromBackendData({
                id: el[0],  //Object.entries returns obj like { '0': key, '1': value }
                ...el[1]    //so append all 'value's props directly there
            }));
            this.props.topicsFetched(topics);
            //topicsFetched(topics);
        })
        console.log("works awesome! try adding something directly within firebase dashboard... it will be updated there automagically! :)");
    }

    render() {
        return <div/>;
    }
}

const mapDispatchToProps = dispatch => ({
    topicsFetched: (topics) => dispatch(topicsFetched(topics))
});

export default connect(null, mapDispatchToProps)(Database);
