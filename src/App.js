import React, {Component} from 'react';
//Scripts
import 'bootstrap'
import 'popper.js'

// Components
import Navigation from './Components/navigation'
import SideBar from './Components/sidebar'
import Chat from './Components/chat'
import Compose from './Components/compose-modal'
import { Cookies } from './Shared/Globals'
import { Redirect } from 'react-router-dom'


export class App extends Component {


	constructor(props) {
		super(props)
		this.state = {
			 authenticated : null
		}
	}

	componentDidMount(){
		if(!new Cookies().getCookie('uid')){
			this.setState({
				authenticated : false
			})
		}
	}
	render() {
		if(this.state.authenticated === false){
			return <Redirect to={'/login'} />
		}
		return (
				<div className="layout">
				{/* Start of Navigation */}
					<Navigation />
				{/* End of Navigation */}
				{/* Start of Sidebar */}
					<SideBar />
				{/* End of Sidebar */}
				{/* Start of Chat */}
					<Chat />
				{/* End of Chat */}
				{/* Start of Compose */}
					<Compose />
				{/* End of Compose */}
				</div>
		)
	}
}



export default App;
