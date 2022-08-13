import type { AppProps } from "next/app"

import "nextra-theme-blog/style.css"
import "../styles/global.css"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
