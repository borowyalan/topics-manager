import React from 'react';
import PropTypes from 'prop-types';
import TopicModel from '../models/TopicModel';
import {connect} from 'react-redux';
import {topicsFetched} from '../../actions/topic.actions';

class Database extends React.Component {
    componentDidMount() {
        // eslint-disable-next-line no-undef
        const db = firebase.database();
        const refA = db.ref('topics');

        refA.on('value', (snapshot) => {
            const topics = Object.entries(snapshot.val()).map((el) => TopicModel.fromBackendData({
                id: el[0],  //Object.entries returns obj like { '0': key, '1': value }
                ...el[1]    //so append all 'value's props directly there
            }));
            this.props.topicsFetched(topics);
        });
    }

    render() {
        return <div/>;
    }
}

Database.propTypes = {
    topicsFetched: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    topicsFetched: (topics) => dispatch(topicsFetched(topics))
});

export default connect(null, mapDispatchToProps)(Database);
