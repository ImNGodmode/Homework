import React, { Component } from 'react'

export class ImageSlider extends Component {
  state = {
    images:[
        
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDentgWPwLjgifm9EtxaPthKLDRLNvCp6nA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqDBQStnh6CttUZsRV6xjwntmMBFU4fgPPnA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQATl5NYz_2E39LYTYfj_qafzVfifye2BqZKA&usqp=CAU"
    ],
    idx: 0
  }
  
  handleNext = () => {
    this.setState({
        idx: this.state.idx + 1
    })
    if (this.state.idx > this.state.images.length -2 )  {
        this.setState({
            idx: this.state.idx = 0
        })
    }
  }
  handleLast = () => {
    if (this.state.idx <= 0 )  {
        this.setState({
            idx: this.state.idx = this.state.images.length - 1
        })
    }else{
        this.setState({
            idx: this.state.idx - 1
    })
  }
}

    render() {
    return (
      <div>
        <img src={this.state.images[this.state.idx]} />
        <button onClick={this.handleNext}>Next</button>
        <button onClick={this.handleLast}>Last</button>
      </div>
    )
  }
}

export default ImageSlider