import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { connect } from 'react-redux';
import { openLoginPage, logout } from './../actions';
import Text from './Text';
import Colors from '../styles/Colors';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class TopBar extends React.Component {
    
    onClick = () => {
        const { loggedUser, login, logout, history } = this.props;
        const onPressAction = loggedUser ? logout : login;
        onPressAction(history);
    };
    
    render() {
        const { loggedUser } = this.props;
        const buttonText = loggedUser ? 'Wyloguj' : 'Zaloguj';
        return (
            <TopBarWrapper>
                <Text type="basic" color={ Colors.white } display={ 'inline' }>
                    Zaloguj się przez GitHub
                </Text>
                <Button marginLeft='10px' onClick={this.onClick} type="primary">
                    { buttonText }
                </Button>
            </TopBarWrapper>
        );
    }
}

TopBar.propTypes = {
    loggedUser: PropTypes.bool,
    login: PropTypes.func,
    logout: PropTypes.func,
    history: PropTypes.any
};

const mapStateToProps = state => ({
    loggedUser: state.loggedUser
});

const mapDispatchToProps = dispatch => ({
    login: (history) => dispatch(openLoginPage(history)),
    logout: () => dispatch(logout())
});

const TopBarWrapper = styled.section`
    width: 100%;
    background-color: ${Colors.black};
    color: ${Colors.white};
    padding: 7px;
`;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopBar));
