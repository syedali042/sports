import { useRouter } from "next/router"
import { useEffect, useState, useRef } from "react"
import Spinner from "./Spinner"

export default function ProgressBar() {
    const { events, pathname } = useRouter()
    const [loading, setLoading] = useState(false)
    const onRouteChangeRef = useRef(null)

    const onRouteChange = nextPath => {
        /* if the next_url(upcoming) is not equal to the current_url */

        //if there is any query param in it, then exclude.
        const [exactPath] = nextPath.split("?")
        if (exactPath !== pathname) setLoading(true)
    }

    useEffect(() => {
        if (onRouteChangeRef.current) {
            events.off("routeChangeStart", onRouteChangeRef.current)
        }

        onRouteChangeRef.current = onRouteChange
        events.on("routeChangeStart", onRouteChange)
    }, [pathname])

    useEffect(() => {
        events.on("routeChangeComplete", () => setLoading(false))
        events.on("routeChangeError", () => setLoading(false))
    }, [])

    return (
        <div className={`loading-screen ${loading && "loading-screen__show"}`}>
            <div className='loading-screen__spinner'>
                <Spinner size={50} />
            </div>

            <style jsx>
                {`
                    .loading-screen {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: 1000;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: #fff;
                        opacity: 0;
                        visibility: hidden;
                        transition: 0.6s ease all;
                    }
                    .loading-screen__show {
                        opacity: 1;
                        visibility: visible;
                    }
                `}
            </style>
        </div>
    )
}
