import React from "react";
import { useParams } from "react-router-dom";
// import styles from './UserProfile.module.css';
import Feed from '../Feed/Feed';
import Head from '../../Helper/Head';

const UserProfile = () => {
    const { user } = useParams();

    return (
        <section className="caontainer mainSection" >
            <Head title={user} />
            <h1 className="title" > {user} </h1>
            <Feed user={user} />
        </section>
    );
}

export default UserProfile;
