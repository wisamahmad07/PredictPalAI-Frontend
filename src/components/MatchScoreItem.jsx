// components
import TruncatedText from '@components/TruncatedText';

// hooks
import useMeasure from 'react-use-measure';

// utils
import {getClubInfo} from '@utils/helpers';
import PropTypes from 'prop-types';

const Item = ({isLeader, withLogo, team, variant}) => {
    const [ref, {width}] = useMeasure();
    const itemStyles = {
        fontFamily: 'var(--heading-font)',
        lineHeight: 1,
        fontSize: variant === 'card' ? '1rem' : '1.125rem',
        color: variant === 'card' ? (isLeader ? 'var(--header)' : 'var(--text)') : 'var(--header-dark)'
    }

    const logoStyles = {
        height: 20,
        width: 20,
    }

    return (
        <div className={`${isLeader ? 'font-bold h3' : ''} flex justify-between items-center gap-5`}
             style={itemStyles}>
            <div className="flex items-center gap-2 flex-1" ref={ref}>
                {
                    withLogo &&
                    <img style={logoStyles} src={getClubInfo(team.id).logo} alt={getClubInfo(team.id).name}/>
                }
                <TruncatedText width={width - 30} text={getClubInfo(team.id).name} lines={1}/>
            </div>
            {team.score}
        </div>
    )
}

const MatchScoreItem = ({match, variant = 'card', withLogo}) => {
    const getLeader = () => {
        if (match.team1.score > match.team2.score) {
            return match.team1.id;
        } else if (match.team1.score < match.team2.score) {
            return match.team2.id;
        } else {
            return null;
        }
    }

    return (
        <div className={`flex flex-col ${variant === 'card' ? 'gap-1.5' : 'gap-2'}`}>
            <Item isLeader={getLeader() === match.team1.id}
                  withLogo={withLogo}
                  variant={variant}
                  team={match.team1}/>
            <Item isLeader={getLeader() === match.team2.id}
                  withLogo={withLogo}
                  variant={variant}
                  team={match.team2}/>
        </div>
    )
}

MatchScoreItem.propTypes = {
    match: PropTypes.object.isRequired,
    variant: PropTypes.oneOf(['card', 'thumb']),
    withLogo: PropTypes.bool
}

export default MatchScoreItem