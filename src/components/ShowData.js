import React from 'react';


const ShowData = (props) => {
    return (
        <ul>
            {
                props.skills.map((skill) => 
                {
                    return(<li key={skill.id}>{skill.name}</li>)
                })
            }
        </ul>
    );
};

export default ShowData;