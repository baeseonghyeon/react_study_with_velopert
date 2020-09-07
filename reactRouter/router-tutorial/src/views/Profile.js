import React from 'react';


const profileData = {
    baesh: {
        name: '배성현',
        description: '유능한 FE개발자가 되기 위해 노력하는 배성현 입니다.'
    },
    gildong: {
        name: '홍길동',
        description: '동해번쩍 서해번쩍'
    }
}

function Profile({ match }) {
    const { username } = match.params;
    const profile = profileData[username];
    if (!profile) {
        return <div>존재하지 않은 유저입니다.</div>
    }
    return (
        <div>
            <h3>
                {username}({profile.name})       
            </h3>
            <p>{profile.description}</p>
        </div>
    );
}

export default Profile;