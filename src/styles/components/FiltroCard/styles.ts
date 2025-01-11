import styled from 'styled-components'
import { Props } from '.'

type PropsSemLegendaEContador = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsSemLegendaEContador>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1F90FF' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#ffffff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1F90FF' : '#5e5e5e')};
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block; /* Corrigido o erro de sintaxe */
`

export const Label = styled.span`
  font-size: 14px;
`
