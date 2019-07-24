import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class zenPost extends React.Component {
	constructor(props){
		super(props);
		
		let lifespan = ((Number(props.timestampInt)-(Number(props.expirationDate)))/-1000);
		let countdown = ((Date.now()-(Number(props.expirationDate)))/1000);
		let visibilityPercentage = (countdown/lifespan)*-10;
	
		this.state = {
			visibility: visibilityPercentage
		}
	}

	updateVisibility(){	

		let lifespan = ((Number(this.props.timestampInt)-(Number(this.props.expirationDate)))/-1000);
		let countdown = ((Date.now()-(Number(this.props.expirationDate)))/1000);
		let visibilityPercentage = (countdown/lifespan)*-10;

		this.setState({
			visibility: visibilityPercentage
		})
	}

	componentDidMount(){
		this.interval = setInterval(
			() => this.updateVisibility(), 1000
		)}

	componentWillUnmount(){
		clearInterval(this.interval)
	}

	render(){
		if (this.state.visibility < 0){
			return false
		}
		return (
			<Grid item key={this.props.id}>{/*Not at all sure if I did this right...*/}
				<Card style={{ height: '450px', width: '300px'}}>
					<CardHeader style={{ backgroundColor: '#aaaaaa' }}
											title={this.props.title}
											subheader={this.props.timestamp}
					/>
					<CardContent>
						<Typography style={{opacity: (this.state.visibility/10)}}
												overflowY='scroll'
						>
							{this.props.content}
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		)
	}
}

export default zenPost;
