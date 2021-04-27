import React from 'react';
import ProfileCard from '../../component/profile-card/profile-card.component';
import { teamPlayers } from '../../data/team-player-data';
import './team-players.scss';

const TeamPlayers = () => {
    return (
        <div className='team-players'>
            <h1 className='title'>Team Players</h1>
            <div className="division-button-container">
                <div className="division-button active">
                    1
                </div>
                <div className="division-button">
                    2
                </div>
                <div className="division-button last">
                    3
                </div>
            </div>
            <div className="team-players-profile">
                {
                    teamPlayers.map((teamPlayer, idx) => (
                        <ProfileCard 
                            fullName={teamPlayer.fullName} 
                            role={teamPlayer.role} 
                            key={idx}    
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default TeamPlayers;
