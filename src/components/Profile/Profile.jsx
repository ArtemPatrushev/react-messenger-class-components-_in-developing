import React from 'react';
import PropTypes from 'prop-types';
import s from './Profile.module.css';

export default class Profile extends React.Component {
    static propTypes = {
        profile: PropTypes.objectOf(PropTypes.string).isRequired,
        loadProfile: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.loadProfile();
    };

    render() {
        let { firstName, lastName, age, photo} = this.props.profile;

        return (
            <div className={s.profileUser}>
                <img src={photo} />
                <div className={s.userInfo}>
                    <p>Name: {firstName}</p>
                    <p>Surname: {lastName}</p>
                    <p>Age: {age}</p>
                </div>
            </div>
        );
    };
};
