// styling
import styled from 'styled-components';

// components
import Spring from '@components/Spring';
import ClubInfo from '@components/ClubInfo';
import LegendItem from '@ui/LegendItem';
import {PieChart, Pie, Cell, ResponsiveContainer, Tooltip} from 'recharts';
import ChartTooltip from '@ui/ChartTooltip';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

// constants
import {STATS_PIE_COLORS} from '@constants/chart';

// assets
import rays from '@assets/rays.svg';

const Wrapper = styled.div`
  position: relative;
  
  .info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  
  .chart {
    position: relative;
    z-index: 2;
  }
  
  .recharts-wrapper .recharts-surface {
    mask: url("${rays}") no-repeat center;
  }
`;

const MatchesSegmentChart = () => {
    const {theme} = useThemeProvider();

    const data = [
        {name: 'Group A', value: 400},
        {name: 'Group B', value: 300},
        {name: 'Group C', value: 300},
    ];

    return (
        <Spring className="card height-w-2 flex flex-col justify-between gap-6 card-padded">
            <ClubInfo id="bayern" title="Bayern Munich" subtitle="Munich, Germany"/>
            <Wrapper className="flex-1">
                <div className="info">
                    <h2>768</h2>
                    <span className="label h6">Matches</span>
                </div>
                <ResponsiveContainer className="chart" width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={140}
                            innerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            strokeWidth={0}
                        >
                            {
                                data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={`var(--${STATS_PIE_COLORS[theme][index]})`}/>
                                ))
                            }
                        </Pie>
                        <Tooltip content={<ChartTooltip/>}/>
                    </PieChart>
                </ResponsiveContainer>
            </Wrapper>
            <div className="flex items-center justify-center gap-3.5">
                <LegendItem color="grass" text="Wins"/>
                <LegendItem color="salmon" text="Losses"/>
                <LegendItem color="purple" text="Draws"/>
            </div>
        </Spring>
    )
}

export default MatchesSegmentChart