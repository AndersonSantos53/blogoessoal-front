import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import './cadastrousuario.css'


function CadastroUsuario() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className="texto1">Entrar</Typography>
                        <TextField id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' type='password' fullWidth />
                        <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' fullWidth />
                        <TextField id='confirmasenha' label='Confirma senha' variant='outlined' name='confirmasenha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className="text-decorator-none" >
                                <Button variant='contained' color='secondary' className='btCancelar'>
                                    Cancelar
                                </Button> 
                                </Link>
                                <Button type="submit" variant='contained' color='primary'>
                                    Cadastrar
                                </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>

        </Grid>
    );
}
export default CadastroUsuario;