import { FC, useEffect } from "react"

const SendAMessage: FC = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://js.hsforms.net/forms/v2.js"
    document.body.appendChild(script)

    script.addEventListener("load", () => {
      if ((window as any).hbspt) {
        ;(window as any).hbspt.forms.create({
          portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID,
          formId: process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID,
          target: "#hubspotForm",
        })
      }
    })
  }, [])

  return <div id="hubspotForm"></div>
}

export default SendAMessage
