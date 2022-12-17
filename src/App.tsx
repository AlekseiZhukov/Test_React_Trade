import React, {useState} from 'react';
import './App.module.scss';
import s from './App.module.scss'
import {data} from "./data"
import Candidate from "./components/Candidate";

function App() {
  const [actionId, setActionId] = useState<number>(1)

  const changeCandidate = () => {
    setActionId(prevState => {
        if (prevState >= data.length || prevState <= 0) {
          return 1
        }
        return ++prevState
      }
    )
  }
  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <h1>Ход торгов <span>Тестовые торги на аппарат ЛОТОС №2033564 (09.11.2020 07:00)</span></h1>
        <hr/>
        <div className={s.table}>
          <h3>Уважаемые участники, во время вашего хода вы можете изменить параметры торгов, указанных в таблице:</h3>
          <div className={s.wrapColumns}>
            <div className={s.headerColumn}>
              <div className={s.headerColumnMain}>
                <h4>ХОД</h4>
                <h4>ПАРАМЕТРЫ И ТРЕБОВАНИЯ</h4>
              </div>
              <div className={s.headerColumnSub}>
                <div><p>Наличие комплекса мероприятий, повышающих стандарты качества изготовления</p></div>
                <div><p>Срок изготовления лота, дней</p></div>
                <div><p>Гарантийные обязательства, мес</p></div>
                <div><p>Условия оплаты</p></div>
                <div><p>Стоимость изготовления лота, руб. (без НДС)</p></div>
                <div><p>Действия:</p></div>
              </div>
            </div>
            {data && data.map(item => (
              <Candidate key={item.id} candidate={item} id={actionId} changeCandidate={changeCandidate}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
