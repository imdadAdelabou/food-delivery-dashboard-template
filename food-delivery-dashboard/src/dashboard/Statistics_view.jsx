import StatisticCard from "../components/StatisticCard";

import { statistics } from "../helpers/constants";

import "../styles/StatisticsView.css";

function StatisticsView() {

    const buildView = () => {
        return statistics.map((statistic, i) => {
            return <StatisticCard img={statistic.img} 
                count={statistic.count} 
                description={statistic.description} 
                percent={statistic.percent} 
                key={i} >
            </StatisticCard>
        });
    }

    return (<div className="row gap-4 cBg">
       {buildView()}
    </div>);
}


export default StatisticsView;