import { FiPlus } from 'react-icons/fi'
import { Container, Brand , Menu, Search, Content, NewNote} from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'

export function Home(){
    return (
        <Container>

            <Brand>
                <h1>RocketNotes</h1>
            </Brand>  

            <Header />

            <Menu>
                
                <li><ButtonText title="hop" isactive /></li>
                <li><ButtonText title="hip" /></li>
                <li><ButtonText title="hiba" /></li>
            </Menu>

            <Search>

            </Search>
            
            <Content>

            </Content>

            <NewNote>
                <FiPlus/>
                New Note
            </NewNote>
        </Container>
    )
}