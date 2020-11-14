import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';

export const CustomGrid = styled(Grid) < { color?: string, height?: string, width?: string } >`
    &&{
        background-color: ${props => props.color};
        font-size: 32px;
        display: flex;
        justify-content:center; 
        align-items:center; 
        height: ${props => props.height}; 
        width: ${props => props.width}; 
        position: absolute; 
    }
`
export const CustomForm = styled.form < { height?: string, width?: string, color?: string, } >`
    height: ${props => props.height}; 
    width: ${props => props.width}; 
    background-color: ${props => props.color};
`

