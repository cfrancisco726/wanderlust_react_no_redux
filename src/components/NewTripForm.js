import React, {Component, PropTypes} from 'react';

class NewTripForm extends Component {
  constructor(){
    super();
    this.state = {
      budget: 0,
      departure_date: '',
      arrival_date: '',
      numOfPeople: '',
      origin: ''
    }
  }

  handleSubmit(){
		debugger
	}

  render() {
	return (
		<form onSubmit={this.handleSubmit.bind(this)}>
			budget:
			<input type='numeric' onChange={(e)=>{this.setState({budget: e.target.value})}} value={this.state.budget}/>
			numOfPeople
			<input type='numeric' onChange={(e)=>this.setState({numOfPeople: e.target.value})}/>
			Origin:
			<input type='text' onChange={(e)=>this.setState({origin: e.target.value})}/>
			Departure Date:
			<input type='date' onChange={(e)=>this.setState({departure_date: e.target.value})}/>
			Arrival Date:
			<input type='date' onChange={(e)=>this.setState({arrival_date: e.target.value})}/>
			<button type='submit'>submit</button>
		</form>
	);
}


}

export default NewTripForm
