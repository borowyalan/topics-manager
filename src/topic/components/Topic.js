import React from 'react';
import TopicDescription from './TopicDescription';
import TrainersList from './TrainersList';
import styled from 'styled-components';
import Participants from './Participants';
import PropTypes from 'prop-types';
import TopicModel from '../../shared/models/TopicModel';

const Topic = ({topic}) => (
    <RowWrapper>
        <TopicDescription title={topic.title} description={topic.description}/>
        <TrainersList trainers={topic.trainers} author={topic.author}/>
        <Participants topic={topic}/>
    </RowWrapper>
);

Topic.propTypes = {
    topic: PropTypes.instanceOf(TopicModel).isRequired
};

const RowWrapper = styled.p`
    width: 100%;
    margin-top: 2em;
    display: flex;
    flex: start;
    justify-content: space-between;
    text-align: left;
`;

export default Topic;
