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

const zenbinTheme = createMuiTheme({
	palette:{
		primary: {
			main: '#aaaaaa'
		}
	}
});

function App() {
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
										variant='filled'
										style={{ marginBottom: '12px' }}
										/>
									<TextField
										fullWidth='true'
										label='Zen Body'
										placeholder='<YOUR THOUGHTS>'
										multiline='true'
										rows='9'
										variant='outlined'
									/>
								</CardContent>
								<CardActions style={{ paddingTop: '0px', paddingBottom: '0px' }}>
									<Button variant='contained' color='primary' fullWidth='true'>
										Submit
									</Button>
								</CardActions>
							</Card>
						</Grid>

						<Grid item >
							<Card style={{ minHeight:'450px', minWidth:'300px', maxWidth:'400px' }}>
								<CardHeader style={{ backgroundColor:'#aaaaaa' }}
									title="This is a zen example"
									subheader="05/02/1993 19:47:03"
								/>
								<CardContent>
									<Typography >
										This is Zenbin!
									</Typography>
								</CardContent>
							</Card>
						</Grid>

						<Grid item >
							<Card style={{ minHeight:'450px', minWidth:'300px', maxWidth:'400px' }}>
								<CardHeader style={{ backgroundColor:'#aaaaaa' }}
									title="This is a zen example"
									subheader="05/02/1993 19:47:03"
								/>
								<CardContent>
									<Typography >
										This is Zenbin!
									</Typography>
								</CardContent>
							</Card>
						</Grid>

						<Grid item >
							<Card style={{ minHeight:'450px', minWidth:'300px', maxWidth:'400px' }}>
								<CardHeader style={{ backgroundColor:'#aaaaaa' }}
									title="This is a zen example"
									subheader="05/02/1993 19:47:03"
								/>
								<CardContent>
									<Typography >
										This is Zenbin!
									</Typography>
								</CardContent>
							</Card>
						</Grid>

					</Grid>
				</Container>
			</Box>
		</ThemeProvider>
  );
}

export default App;
