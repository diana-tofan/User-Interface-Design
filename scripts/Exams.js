import React from 'react';
import styles from '../styles/Exams.css';
import { LineChart } from 'react-chartkick';

class Exams extends React.Component {

  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
  }

  getData() {
    let data = [];
    for (var i = 0; i < grades.length; i++) {
      data.push(
        {
          'score': grades[i].score,
          'date': grades[i].date
        }
      )
    }
    return data;
  }

  render() {
    const data = [
      {'name':'Grade', 'data':
      {"2017-01-11 00:00:00 -0800": 95,
        "2017-01-09 00:00:00 -0800": 81,
        "2017-01-08 00:00:00 -0800": 88,
        "2017-01-04 00:00:00 -0800": 50,
        "2017-01-05 00:00:00 -0800": 71,
        "2016-12-23 00:00:00 -0800": 80,
        "2016-11-20 00:00:00 -0800": 40,
        "2016-10-15 00:00:00 -0800": 68,
        "2016-10-7 00:00:00 -0800": 0
      }},
    ];
    return (
      <div className={styles.chart}>
        <br/><br/>Overall exam performance:
        <LineChart
          min={0}
          max={100}
          xtitle="Date"
          ytitle="Grade"
          curve={true}
          data={data} />
        <div>
          Exams this month:
          <ul>
            {
              events.map(event => {
                if (event.start.getMonth() == new Date().getMonth())
                  return (<li>{event.title}</li>)
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Exams;