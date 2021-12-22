import { ThemeProvider } from "styled-components"

import Theme from "@styles/Theme"
import Header from "./Header"

import styled from 'styled-components';

export const Font = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Mulish&display=swap');
`

function Layout({ children }) {
    return (
        <ThemeProvider theme={Theme}>
            <Font>
                <Header />
                {children}
            </Font>
        </ThemeProvider>
    )
}
export default Layout
