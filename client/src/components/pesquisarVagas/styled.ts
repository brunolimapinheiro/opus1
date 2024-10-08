import { styled, alpha } from '@mui/material/styles';
import Styled from 'styled-components';
import InputBase from '@mui/material/InputBase';
import { theme } from "../../styles/theme";

export const corAzulFundo = Styled.section`
  /* background: ${theme.colors.colorOne};
  height: 600px; */
  
`

export const conteiner = Styled.div`
  margin: auto;
  background:${theme.colors.colorOne};
  border: 1px solid blue;
  width: 80%;
  height: 100vh;

  @media(max-width:768px){
    width: 100%;

  }
`
export const pesquisaWrapper = Styled.div`
  margin: auto;
  width: 80%;
  height: 300px;
  border: 1px solid black;
`
export const test = Styled.div`
  background-color: #D9D9D9;
  margin: 70px 0px;
  padding: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  border: 5px solid violet;


`

// Barra de pesquisa
export const Search = styled('div')(({ theme }) => ({

    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),

    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },

    marginLeft: 50,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
export const SearchIconWrapper = styled('div')(({ theme }) => ({
    
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  border: '1px solid #333',
  marginLeft: '10px',
  borderRadius: '10px',
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '25ch',
        // '&:focus': {
        //   width: '20ch',
        // },
      },
    },
  }));


// Tipo de candidato
export const tipoContratoWrapper = Styled.div`

`
export const tipoContratoTexto = Styled.label`


`
export const tipoContratoSelect = Styled.select`

`
export const tipoContratoOpcao = Styled.option`
  padding: 10px;
`;

// Vagas mais recentes
export const filtrarVagasWrapper = Styled.div`
`
export const filtrarVagasTexto = Styled.label`
  
`
export const filtrarVagasSelect = Styled.select`
  border: '1px solid #234560';
`
export const filtrarVagas = Styled.option`
  padding: 10px;
`;


export const btnFiltrar = Styled.button`
  
  border-radius: 10px;
`