// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server'

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <script
            defer
            data-domain="lithium.cmgriffing.com"
            src="https://plausible.io/js/script.outbound-links.js"
          ></script>
          {assets}
        </head>
        <body class="font-body">
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
))
