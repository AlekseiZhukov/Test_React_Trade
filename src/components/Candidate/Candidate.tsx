import React from 'react';
import s from './Candidate.module.scss'
import {DataItem} from '../../data'
import Timer from "../Timer";

interface CandidateProps {
  candidate: DataItem
  id: number
  changeCandidate: () => void
}

const Candidate: React.FC<CandidateProps> = ({candidate, id, changeCandidate}) => {

  return (
    <div className={s.root}>
      <div className={s.headerColumn}>
        <div className={s.headerColumnMain}>
          <div className={s.wrapTimer}>
            {id === candidate.id && <Timer changeCandidate={changeCandidate}/>}
          </div>
          <div>
            <h4>УЧАСТНИК №{candidate.id}</h4>
            <h4>{candidate.name}</h4>
          </div>
        </div>
        <div className={s.headerColumnSub}>
          <div><p>{candidate.manufacturingImprovementComplex ? candidate.manufacturingImprovementComplex : '-'}</p>
          </div>
          <div><p>{candidate.productionTimeDays}</p></div>
          <div><p>{candidate.monthsWarranty}</p></div>
          <div><p>{candidate.termsOfPayment}</p></div>
          <div><p>{candidate.lotProductionCost}</p></div>
          <div><p></p></div>
        </div>
      </div>


    </div>
  );
};

export default Candidate;