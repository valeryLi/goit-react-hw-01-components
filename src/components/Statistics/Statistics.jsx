import PropTypes from 'prop-types';
import style from './Statistics.module.css';


const randomColor = () => {
    const color = 'rgba(' +
        Math.round(Math.random() * 256) +
        ',' +
        Math.round(Math.random() * 256) +
        ',' +
        Math.round(Math.random() * 256) +
        ',' +
        0.5 +
        ')';
        
    return color;
};

export const Statistics = ({ title, stats }) => {
    return (
        <section className={style.section}>
            {title && <h2 className={style.title}>{title}</h2>}
            <ul className={style.stats_list}>
                {stats.map(({ id, label, percentage }) => (
                    <li key={id}
                        style={{ backgroundColor: randomColor()}}>
                        <span className={style.label}>{label}</span>
                        <span className={style.percentage}>{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
};