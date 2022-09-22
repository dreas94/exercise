import React, {useState} from 'react';
import Form from './Form';
import ShowData from './ShowData';

const Skill = () => {

    const initialSkills =  [ {id:2, name:'React'}, {id:2, name:'Java'}, {id:3, name:'SQL'}];
    const [skills, setSkills] = useState(initialSkills)

    return (
        <div>
            <h2>FullStack Developer Skills</h2>
            <ShowData  skills={skills}></ShowData>
            <Form setSkills={setSkills} skills={skills}></Form>
        </div>
    );
};

export default Skill;