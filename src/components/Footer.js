import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import { AnimatePresence, motion } from "framer-motion"
import { XCircle } from "react-feather"

export default () => {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [buttonText, setButtonText] = useState("Send")

  const endpoint = "https://self-notify.glitch.me"

  useEffect(() => {
    /* ping endpoint to warm up project */
    fetch(endpoint + "/ping")
  }, [])

  useEffect(() => {
    /* lock/unlock scroll depending on whether modal is open */
    if(open === true) {
      /* reset send button text so when reopening after sending feedback once the button doesn't still say "Sent" */
      setButtonText("Send")
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "visible"
    }
    
  }, [open])

  const submit = () => {
    setButtonText("Sending...")

    fetch(endpoint + "/send", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        from: "chem.elk.sh",
        subject: "New feedback for chem.elk.sh",
        body: input.replace(/\n/g, "<br>")
      })
    })
      .then(res => res.json())
      .then(json => {
        if(json.success) {
          setInput("")
          setButtonText("Sent")
        } else {
          setButtonText("Send")
          alert("Something went wrong, please try again.")
        }
      })
  }

  return (
    <>
      <footer
        css={css`
          border-top: 2px solid var(--accent-light);
          margin-top: 72px;
          padding-top: 24px;
        `}
      >
        <p
          css={css`
            line-height: 1.5;
            margin: 0;
          `}
        >
          If you have any suggestions or find any mistakes, feel free to
          {" "}

          <span
            onClick={() => setOpen(true)}
            css={css`
              text-decoration: underline;
              cursor: pointer;
            `}
          >
            submit feedback. 
          </span>
        </p>
      </footer>

      <AnimatePresence>
        {open && (
          <motion.div
            css={css`
              z-index: 1;
              position: fixed;
              top: 0;
              left: 0;
              background-color: hsla(0, 0%, 0%, .4);
              height: 100vh;
              width: 100vw;
              
              display: grid;
              place-items: center center;
            `}
            key="wrapper"
            style={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
          >

            <motion.div
              key="modal"
              css={css`
                background-color: white;
                padding: 24px;
                width: 512px;
                opacity: 1;
                border-radius: 6px;
                border: 1px solid var(--text-100);
                margin: 0 16px;

                @media (max-width: 550px) {
                  width: calc(100% - 32px);
                }
              `}
              style={{
                y: 50
              }}
              animate={{
                y: 0
              }}
            >
              <div
                css={css`
                  display: grid;
                  grid-template-columns: 1fr max-content;
                  align-items: center;

                  margin-bottom: 16px;
                `}
              >
                <p
                  css={css`
                    margin: 0;
                    font-size: 1.1rem;
                    font-weight: 500;
                  `}
                >
                  Suggestions or corrections:
                </p>

                <div
                  onClick={() => setOpen(false)}
                  css={css`
                    cursor: pointer;
                  `}
                >
                  <XCircle
                    stroke="var(--text-200)"
                    strokeWidth={2}
                    size={22}
                  />
                </div>
              </div>

              <textarea
                value={input}
                onChange={event => setInput(event.target.value)}
                autoFocus
                css={css`
                  -webkit-appearance: none;
                  border: 2px solid var(--text-100);
                  width: 100%;
                  border-radius: 4px;
                  padding: 16px;
                  background: transparent;
                  resize: vertical;
                  min-height: 200px;
                  transition: border-color .2s;
                  outline: none;
                  line-height: 1.5;
                `}
              />

              <button
                css={css`
                  -webkit-appearance: none;
                  border: none;
                  padding: 8px 12px;
                  background-color: var(--accent-light);
                  color: var(--accent);
                  border-radius: 6px;
                  margin-top: 24px;
                  float: right;
                  font-weight: 500;
                  cursor: pointer;

                  :focus {
                    outline: 1px dashed var(--accent-light);
                    outline-offset: 2px;
                  }
                `}
                onClick={submit}
              >
                {buttonText}
              </button>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}