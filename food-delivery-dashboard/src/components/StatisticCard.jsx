import "../styles/StatisticsView.css";
import DownRedIcon from "../assets/statistics_icon/down_red_icon.svg";
import UpGreenIcon from "../assets/statistics_icon/up_green_icon.svg";

function IsUpOrDownIcon(isUp) {

    return isUp ? UpGreenIcon : DownRedIcon;
}


function StatisticCard(props) {
    const nbrDay = 30;

    return (<div className="bg-white card__config d-flex col-12 col-lg">
            <img className="resize__card" src={props.img} />
        <div>
            <h1 className="fw-bold count_style">{props.count}</h1>
            <h3 className="fw-normal label">{props.description}</h3>
            <div className="mt">
                <img src={IsUpOrDownIcon(props.isUp)} />
                <span className="percent fw-normal">{props.percent}% ({nbrDay} days)</span>
            </div>
        </div>
    </div>);
}

export default StatisticCard;