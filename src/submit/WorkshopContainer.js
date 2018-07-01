import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {submitTopic} from '../actions/topic.actions';
import WorkshopForm from '../components/WorkshopForm';

class WorkshopContainer extends React.Component {
    render(){
        return (
            <div>
                <WorkshopForm onClick={this.props.submitTopic}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    submitTopic: (topic) => dispatch(submitTopic(topic))
});

WorkshopContainer.propTypes = {
    submitTopic: PropTypes.func.submitTopic
};

export default connect(null, mapDispatchToProps)(WorkshopContainer);
