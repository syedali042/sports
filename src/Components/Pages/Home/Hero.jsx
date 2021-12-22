
import {HeroImage, InputAndButton, Main} from './styles'

import Container from '@components/Container'

import SearchIcon from '@assets/icons/Search.svg'

import HeroImg from '@assets/images/Hero.png'

export default function Hero() {
    return (
        <HeroImage image={HeroImg}>
            <Main>
                <h3><green>GET FIT </green>with <br />avengers Gym</h3>
            </Main>
            <Container>
                <InputAndButton>
                    <div style={{position: 'relative'}}>
                        <SearchIcon />
                        <input type="text" className="hero-input" placeholder="Search sport centers, spa, products..." />
                    </div>
                    <button>Search</button>
                </InputAndButton>
            </Container>
        </HeroImage>
    )
}


