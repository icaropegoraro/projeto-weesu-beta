import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const App = () => {
  return (
      <Grid container spacing={2} justifyContent={'center'} alignContent={'center'}>
        <Grid>
          <TextField
            label='Digite seu email'
          />
        </Grid>
        <Grid>
          <TextField
            label='Digite sua senha'
            type='password'
          />
        </Grid>
      </Grid> 
    
  )
}

export default App;