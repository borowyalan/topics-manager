import React from 'react';
import Section from '../../components/Section';
import Text from '../../components/Text';
import Topic from './Topic';
import PropTypes from 'prop-types';
import TopicModel from '../../shared/models/TopicModel';
import ActivityIndicator from '../../shared/components/ActivityIndicator';

const TopicsList = ({ topics, pending }) => (
    <Section>
        <Text type='primary'>Zgłoszone tematy</Text>
        {pending && <ActivityIndicator/>}
        {topics.map((topic, index) => <Topic key={index} topic={topic}/>)}
    </Section>
);

TopicsList.propTypes = {
    topics: PropTypes.arrayOf(PropTypes.instanceOf(TopicModel)).isRequired,
    pending: PropTypes.bool
};

TopicsList.defaultProps = {
    topics: [],
    pending: false
};

export default TopicsList;
