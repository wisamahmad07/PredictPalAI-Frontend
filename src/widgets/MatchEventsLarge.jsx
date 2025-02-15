// styling
import styled from 'styled-components';

// components
import Spring from '@components/Spring';
import ClubInfo from '@components/ClubInfo';
import Score from '@ui/Score';
import MatchTrack from '@ui/MatchTrack';
import MatchEventText from '@ui/MatchEventText';
import MatchProgress from '@ui/MatchProgress';

// hooks
import useMeasure from 'react-use-measure';

const Header = styled.div`
  .main {
    display: none;
    
    @media screen and (min-width: 768px) {
        display: flex;
    }
  }
`;

const MatchEventsLarge = () => {
    const [ref, {width}] = useMeasure();

    const events = [
        {type: 'goal', minute: 6, count: 1},
        {type: 'goal', minute: 20, count: 1},
        {type: 'substitution', minute: 30, count: 2},
        {type: 'goal', minute: 47, count: 1},
        {type: 'goal', minute: 60, count: 1},
        {type: 'substitution', minute: 70, count: 2},
    ]

    return (
        <Spring className="card flex flex-col">
            <Header className="flex items-center justify-between card-padded relative">
                <ClubInfo id="bayern"/>
                <Score team1={0} team2={2}/>
                <ClubInfo id="barcelona" wrapperClass="flex-row-reverse text-right"/>
            </Header>
            <div className="flex flex-col gap-5 flex-1 relative card-padded"
                 ref={ref}
                 style={{paddingTop: 20}}>
                <MatchProgress currentMinute={79} containerWidth={width}/>
                <MatchEventText minute={79} text="Bayern attacks on the left"/>
                <MatchTrack events={events} currentMinute={79}/>
            </div>
        </Spring>
    )
}

export default MatchEventsLarge