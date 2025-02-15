// components
import Spring from '@components/Spring';
import ClubInfo from '@components/ClubInfo';
import Progress from '@ui/Progress';

// hooks
import {useThemeProvider} from '@contexts/themeContext';
import {useWindowSize} from 'react-use';

const TeamStatsProgress = () => {
    const {width} = useWindowSize();
    const {theme} = useThemeProvider();
    const data = [
        {name: 'Goals', value: 2},
        {name: 'Total attempts', value: 8},
        {name: 'shots on target', value: 2},
        {name: 'Blocked', value: 12},
        {name: 'Corners', value: 2},
        {name: 'Offsides', value: 8}
    ]

    const getPercents = () => {
        let total = 0;
        for (const item of data) {
            total += item.value;
        }
        const result = [];
        for (const item of data) {
            result.push((item.value / total) * 200);
        }
        return result;
    }

    return (
        <Spring className={`card flex flex-col ${width < 414 ? 'gap-5' : 'g-30'}`}>
            <ClubInfo wrapperClass="card_header"
                      id="manunited"
                      title="Manchester United"
                      subtitle="First half statistics" />
            <div className="flex flex-col justify-between flex-1 border-top card-padded  gap-5">
                {
                    data.map((item, index) => (
                        <div key={index} className="flex flex-col gap-1">
                            <div className="flex justify-between label h6">
                                <span>{item.name}</span>
                                <span>{item.value}</span>
                            </div>
                            <Progress value={getPercents()[index]}
                                      barColor="red"
                                      trackColor={theme === 'light' ? 'body' : 'border'} />
                        </div>
                    ))
                }
            </div>
        </Spring>
    )
}

export default TeamStatsProgress