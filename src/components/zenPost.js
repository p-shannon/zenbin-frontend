import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class zenPost extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}

	render(){
		return (
			<Grid item >
				<Card style={{ height: '450px', width: '300px'}}>
					<CardHeader style={{ backgroundColor: '#aaaaaa' }}
											title={this.props.title}
											subheader={this.props.timestamp}
					/>
					<CardContent>
						<Typography style={{opacity: (10/10), overflow: 'scroll'}}>{/* Might need an overflow scroll here.*/}
							{this.props.content}
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		)
	}
}

export default zenPost;
