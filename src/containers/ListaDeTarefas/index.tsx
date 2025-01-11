import { useSelector } from 'react-redux'

import Tarefa from '../../styles/components/Tarefa'
import { Container } from './styles'
import { RootReducer } from 'store'

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)
  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {tarefas.length > 0 ? (
          tarefas.map((t) => (
            <li key={t.titulo}>
              <Tarefa
                descricao={t.descricao}
                titulo={t.titulo}
                status={t.status}
                prioridade={t.prioridade}
              />
            </li>
          ))
        ) : (
          <p>Nenhuma tarefa disponível.</p>
        )}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
