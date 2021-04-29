import React, { useEffect, useState } from 'react';
import useWindowDimensions from '../../hooks/use-window-domwnsion';
import ProfileCard from '../../component/profile-card/profile-card.component';
import { teamPlayers } from '../../data/team-player-data';
import './team-players.scss';

const TeamPlayers = () => {
    const [section1Active, setSection1Active] = useState(true);
    const [section2Active, setSection2Active] = useState(false);
    const [section3Active, setSection3Active] = useState(false);
    const [divisionNone, setDivisonNone] = useState(false);
    const { width } = useWindowDimensions();

    const section1 = section1Active ? 
        teamPlayers.slice(0, 6).map((teamPlayer, idx) => (
            <ProfileCard 
                fullName={teamPlayer.fullName} 
                imgUrl={teamPlayer.imgUrl}
                role={teamPlayer.role} 
                twitterUrl={teamPlayer.twitterUrl}
                key={idx}    
            />
        )) : '';
    const section2 = section2Active ? 
        teamPlayers.slice(6, 12).map((teamPlayer, idx) => (
            <ProfileCard 
                fullName={teamPlayer.fullName} 
                role={teamPlayer.role} 
                twitterUrl={teamPlayer.twitterUrl}
                key={idx}    
                imgUrl={teamPlayer.imgUrl}
            />
        )) : '';
    const section3 = section3Active ? 
        teamPlayers.slice(12, 18).map((teamPlayer, idx) => (
            <ProfileCard 
                fullName={teamPlayer.fullName} 
                role={teamPlayer.role} 
                twitterUrl={teamPlayer.twitterUrl}
                key={idx}    
                imgUrl={teamPlayer.imgUrl}
            />
        )) : '';

    useEffect(() => {
        if(width <= 865){
            setSection1Active(true);
            setSection2Active(true);
            setSection3Active(true);
            setDivisonNone(true);
        } else{
            setSection1Active(true);
            setSection2Active(false);
            setSection3Active(false);
            setDivisonNone(false);
        }
    }, [width])
    

    const teamPlayersConatiner = [section1, section2, section3];

    return (
        <div className='team-players'>
            <h1 className='title'>Team Players</h1>
            <div className={`${divisionNone ? 'none' : ''} division-button-container`}>
                <div 
                    className={`division-button ${section1Active ? 'active' : ''}`}
                    onClick={()=>{
                        setSection3Active(false);
                        setSection2Active(false);
                        setSection1Active(true);
                    }}
                >
                    1
                </div>
                <div 
                    className={`division-button ${section2Active ? 'active' : ''}`}
                    onClick={()=>{
                        setSection1Active(false);
                        setSection3Active(false);
                        setSection2Active(true);
                    }}
                >
                    2
                </div>
                <div 
                    className={`division-button last ${section3Active ? 'active' : ''}`}
                    onClick={()=>{
                        setSection1Active(false);
                        setSection2Active(false);
                        setSection3Active(true);
                    }}
                >
                    3
                </div>
            </div>
            <div className="team-players-profile">
                { teamPlayersConatiner }
            </div>
        </div>
    );
}

export default TeamPlayers;
