import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

const colors = ['#984ED0', '#CDD25A', '#FDB05E', '#0475ED', '#F02C6E'];


export function Statistics({ title, stats }) {
  return (<section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css['stat-list']}>
      {stats.map(({ id, label, percentage }, index) => (
        <li className={css.item} key={id} style={{ background: colors[index] }}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}</span>
        </li>
      ))}
    </ul>
  </section>
  );
};

// Второй вариант

// export function Statistics({ title, stats }) {
//   return (<section className={css.statistics}>
//     {title && <h2 className={css.title}>{title}</h2>}

//     <ul className={css['stat-list']}>
//       {stats.map(({ id, label, percentage }, index) => (
//         <li className={css.item} key={id} style={{ background: colors[index] }}>
//           <Stats label={label} percentage={percentage} />
//         </li>
//       ))}
//     </ul>
//   </section>
//   );
// };

// function Stats({ label, percentage }) {
//   return (
//     <>
// <span className={css.label}>{label}</span>
// <span className={css.percentage}>{percentage}</span>
//     </>
//   )
// }



Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};