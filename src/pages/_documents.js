// import Document from "next/document"
import { ServerStyleSheet } from "styled-components"

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)

            const link1 = React.createElement("link", {
                rel: "preconnect",
                href: "https://fonts.googleapis.com",
            })

            const link2 = React.createElement("link", {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
            })

            const fonts = React.createElement("link", {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500&family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600&display=swap",
            })

            const maps = React.createElement('script', {
                src:'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&v=weekl',
                async:true,
            })

            return {
                ...initialProps,
                head: [...initialProps.head, link1, link2, fonts, maps],
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }
}

export default MyDocument
