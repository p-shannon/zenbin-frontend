import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class ZenForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			newZenContent: null,
			newZenTitle: null
		}
		this.handleTitleChange = this.handleTitleChange.bind(this)
		this.handleContentChange = this.handleContentChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)

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
			newZenTitle: "",
			newZenContent: "",
		})
		event.preventDefault()
	}

	render(){
		return(
			<Grid item >
				<Card style={{ height:'450px', width:'300px' }}>
					<CardHeader style={{ backgroundColor: '#aaaaaa' }}
						title="Create a new Zen"
						subheader="Breathe, Create, Release"
					/>
					<CardContent>
						<TextField 
							fullWidth='true'
							label='Zen Title'
							placeholder='<UNTITLED>'
							value={this.state.newZenTitle}
							variant='filled'
							onChange={this.handleTitleChange}
							style={{ marginBottom: '12px' }}
						/>
						<TextField
							fullWidth='true'
							label='Zen Body'
							placeholder='<YOUR THOUGHTS>'
							value={this.state.newZenContent}
							onChange={this.handleContentChange}
							multiline='true'
							rows='9'
							variant='outlined'
						/>
					</CardContent>
					<CardActions style={{ paddingTop: '0px', paddingBottom: '0px' }}>
						<Button variant='contained' color='primary' fullWidth='true' onClick={(event) => {this.handleSubmit(event); setTimeout(this.props.fetchZens,500)}}>
							Submit
						</Button>
					</CardActions>
				</Card>
			</Grid>
		)
	}
}

export default ZenForm;
