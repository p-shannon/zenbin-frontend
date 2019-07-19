import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import ZenPost from './components/zenPost';
import ZenForm from './components/zenForm';

const zenbinTheme = createMuiTheme({
	palette:{
		primary: {
			main: '#aaaaaa'
		}
	}
});

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			zens: null,
			zensFetched: false,
			newZenContent: null,
			newZenTitle: null,
			updater: null
		}

		this.handleTitleChange = this.handleTitleChange.bind(this)
		this.handleContentChange = this.handleContentChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.fetchZens = this.fetchZens.bind(this)
	}
	/* This is whack */
	handleTitleChange(event) {
		this.setState({newZenTitle: event.target.value})
	}

	handleContentChange(event) {
		this.setState({newZenContent: event.target.value})
	}
	/*This is worse*/
	handleSubmit(event) {
		console.log('click!')
		fetch('http://zenbin-api.venusarc.net/zens/',{
			method: 'post',
			body: JSON.stringify({
				title: this.state.newZenTitle,
				content: this.state.newZenContent
			}),
			headers: {
				'content-type': 'application/json'
			}
		}).then(response => response.json())
			.then(newZen => {
			console.log(newZen)
		})
		this.setState({
			newZenTitle: null,
			newZenContent: null,
			zensFetched: false
		})
		event.preventDefault()
	}

	fetchZens(){
		console.log('Fetching zens.')
		fetch('http://zenbin-api.venusarc.net/zens/')
			.then(response => response.json())
			.then(data => {
				console.log(data)
				this.setState({
					zens: data.validZens,
					zensFetched: true
				})
			})
	}

	componentWillMount(){
		if (!this.state.zensFetched) {
			this.fetchZens()
		}
		this.setState({updater: setInterval(this.fetchZens,5000)})
	}

	render(){
		return (
			<ThemeProvider theme={zenbinTheme}>
				<Box style={{ width:'100vw', minHeight:'100vh', backgroundColor:'grey' }}>
					<AppBar position='static'>
						<Toolbar>
							<Typography variant='h5'> Zenbin </Typography>
						</Toolbar>
					</AppBar>
					
					<Container style={{ padding:'12px'}}>
						<Grid container justify='center' spacing={3}>
							
							<ZenForm
								fetchZens={this.fetchZens}
							/>

							{this.state.zens ? (this.state.zens.slice(0).reverse().map(zen => {
								let displayedStamp = new Date(Number(zen.time_stamp)).toLocaleString()
								//let lifespan = ((Number(zen.time_stamp)-(Number(zen.expiration_date)))/-1000)
								//let countdown = ((Date.now()-(Number(zen.expiration_date)))/1000)
								//let visibilityPercentage = (countdown/lifespan)*-10
								return(
									<ZenPost 
										title={zen.title} 
										timestamp={displayedStamp}
										content={zen.content}
										timestampInt={zen.time_stamp}
										expirationDate={zen.expiration_date}
										id={zen.id}
									/>
								)
							})) : null}


						</Grid>
					</Container>
				</Box>
			</ThemeProvider>
		)
	}
}

export default App;
