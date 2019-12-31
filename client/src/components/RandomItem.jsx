import React, { Component } from 'react';
import { getRandomItems, getRatItem, getRandomMagicalItems, getRandomPhysicalItems } from '../api/apiCall';


class RandomItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      handleGod: this.props.handleGod
    }
  }

  componentDidMount = () => {
    if (this.props.handleGod.name === "Ratatoskr") {
      this.handleRatItem()
    } else if (this.props.handleGod.powerType === "Physical") {
      console.log("Phy")
      this.handleRandomPhysicalItems()
    } else if (this.props.handleGod.powerType === "Magical") {
      console.log("Mag")
      this.handleRandomMagicalItems()
    }

  }


  componentDidUpdate = (prevProps) => {
    if (prevProps.handleGod !== this.state.handleGod) {
      if (this.props.handleGod.name === "Ratatoskr") {
        this.handleRatItem()
      } else if (this.props.handleGod.powerType === "Physical") {
        console.log("Phy")
        this.handleRandomPhysicalItems()
      } else if (this.props.handleGod.powerType === "Magical") {
        console.log("Mag")
        this.handleRandomMagicalItems()
      }

    }
  }

  handleRandomPhysicalItems = async () => {
    const resp = await getRandomPhysicalItems()
    console.log(resp)
    const items = resp
    this.setState({
      items
    })
  }

  handleRandomMagicalItems = async () => {
    const resp = await getRandomMagicalItems()
    console.log(resp)
    const items = resp
    this.setState({
      items
    })
  }

  handleRatItem = async () => {
    const resp = await getRatItem()
    console.log(resp)
    const items = resp
    this.setState({
      items
    })
  }

  render() {


    return (
      <div>
        {
          this.state.items && this.state.items ?
            console.log(this.state.items)
            : this.state.items.map(item => (
              <div key={item.id}>
                <img src={item.img_url} key={item.id} />
                <h3>{item.Item}</h3>
              </div>
            ))

        }

      </div>
    );
  }
}

export default RandomItem;