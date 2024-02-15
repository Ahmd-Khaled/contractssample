import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import { RxReload } from "react-icons/rx";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 600 },
  { name: 'Group C', value: 500 },
  { name: 'Group D', value: 1000 },
];



const COLORS = ['#28d094', '#ff4961'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};



const Rate = ({ assignedNotebooksCount, notAssignedNotebooksCount }) => {
  const { t, i18n } = useTranslation();
  const chart1Data = [
    { name: 'Assigned', value: assignedNotebooksCount },
    { name: 'Not Assigned', value: notAssignedNotebooksCount },
  ];

  return (
    <div className={styles.rate}>
      <div className={styles.head}>
        <h4 className={styles.title}>الدفاتر</h4>
        <RxReload />
      </div>
      <div className={styles.content}>
        <ResponsiveContainer height='100%' width='100%' style={{direction: i18n.dir()}}>
          <PieChart style={{direction: i18n.dir()}}>
            <Pie
              data={chart1Data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              direction={i18n.dir()}
            >
              {data.map((entry, index) => (
                <Cell direction={i18n.dir()} key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Rate;