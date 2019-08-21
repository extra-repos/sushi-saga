import React, { Fragment } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from "../components/Sushi";

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.slice(props.index,props.index+4).map(sushi => <Sushi sushi={sushi} key={sushi.id} sushiClickHandler={props.sushiClickHandler} eatenSushis={props.eatenSushis} />)
        }
        <MoreButton moreButton={props.moreClickButton}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer