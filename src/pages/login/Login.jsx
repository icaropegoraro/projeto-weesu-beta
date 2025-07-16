import { Grid, TextField, Button } from "@mui/material"
import { useState } from "react"

export const Login = () => {
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const tryLogin = () => {
        if ((email == 'icaro') && (senha == '1234')) {
            alert('Login realizado')
            setSenha('')
            setEmail('')
            return
        }
        alert('Falha no login')
        setSenha('')
        setEmail('')
    }
    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 3 }}>
                <TextField
                    fullWidth
                    label='Email'
                    name='email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
                <TextField
                    fullWidth
                    label='Senha'
                    name='senha'
                    value={senha}
                    onChange={(event) => setSenha(event.target.value)}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
                <Button variant="outlined" onClick={tryLogin}>Top demais</Button>
            </Grid>
        </Grid>
    )
}