import React, { Component } from 'react';
import { getRandomGod, getGods } from '../api/apiCall'
import Button from './Button'
import RandomItem from './RandomItem';


class RandomGod extends Component {
  state = {
    God: ""
  }

  handleRandomGodId = async () => {
    const lengthOfGod = await getGods()
    const randomGodId = Math.floor(Math.random() * lengthOfGod.godlist.length)

    this.handleRandomGod(randomGodId)
  }


  handleRandomGod = async (randomGodId) => {
    const randomGod = await getRandomGod(randomGodId)
    const God = randomGod.godlist
    this.setState({
      God
    })

  }

  render() {
    const { God } = this.state

    if (God !== "") {
      return (
        <div key={God.id}>
          <RandomItem handleGod={this.state.God} />
          <img src={God.img_url} key={God.id} />
          <Button handleClick={this.handleRandomGodId} />
        </div>
      )
    }

    return (
      <div>
        <Button handleClick={this.handleRandomGodId} />
        <RandomItem handleGod={this.state.God} />

      </div>
    );
  }
}

export default RandomGod;