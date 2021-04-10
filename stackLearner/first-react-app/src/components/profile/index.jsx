import React from 'react';
import './profile.style.css';
import Bio from './Bio';
import Skills from './Skills';
import Links from './Links';


class Profile extends React.Component {

    myskills = {
        skilla : 'Python',
        skillb : 'Javascript',
        skillc : 'C++'
    };

    render(){

        return (
            <div className='Container'>
               
                <Bio name='Abu Jafor Mohammad Saleh' title='Programmer'/>

                <Skills skilla={this.myskills.skilla} skillb={this.myskills.skillb} skillc={this.myskills.skillc} />

                <Links/>
               
            </div>
        );
    }
}

export default Profile;