import React, { useState } from 'react'
import AlertProvider, { alert, confirm, prompt } from 'react-alert-async'
import 'react-alert-async/dist/index.css'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import * as styles from 'react-syntax-highlighter/dist/esm/styles/prism'

function Alert() {
  const [state, setState] = useState("Nothing's been alerted")
  const [code, setCode] = useState(false)
  const codestring = `async () => {
    try {
      const x = await alert('Something')
      console.log(x)
      setState('Yay, so you read all that')
    } catch (e) {
      // won't actually get here
    }
    // now that was simple?
  }`
  return (
    <section>
      <h2>Alerts</h2>
      <p>Alerts are simple, you have to click yes on them</p>
      <div className='state'>
        <p>{state}</p>
      </div>
      <div className='buttons'>
        <button
          onClick={async () => {
            try {
              const x = await alert('Idk write something meaningful here', {
                duration: 500
              })
              console.log(x)
              setState('Yay, so you read all that')
            } catch (e) {
              console.log('here2')
              setState("Oh, we're sorry about that :(")
            }
          }}
        >
          Make an alert
        </button>
        <button onClick={() => setCode((code) => !code)}>
          {code ? 'Hide' : 'Show'} Code
        </button>
      </div>
      {code && (
        <SyntaxHighlighter
          showLineNumbers
          style={styles.a11yDark}
          language='javascript'
        >
          {codestring}
        </SyntaxHighlighter>
      )}
    </section>
  )
}
function Prompt() {
  const [state, setState] = useState("Nothing's been prompted")
  const [code, setCode] = useState(false)
  const codestring = `async () => {
    try {
      const x = await prompt("What's your name?")
      setState('Your name is: ' + x)
    } catch (e) {
      setState('Oh dang, we didnt get your name :(')
    }
  }`
  return (
    <section>
      <h2>Prompts</h2>
      <p>
        Prompts are like confirms, but you get what the user typed in the box.
        Or the user can deny them.
      </p>
      <div className='state'>
        <p>{state}</p>
      </div>
      <div className='buttons'>
        <button
          onClick={async () => {
            try {
              const x = await prompt("What's your name?")
              setState('Your name is: ' + x)
            } catch (e) {
              setState('Oh dang, we didnt get your name :(')
            }
          }}
        >
          Make a prompt
        </button>
        <button onClick={() => setCode((code) => !code)}>
          {code ? 'Hide' : 'Show'} Code
        </button>
      </div>
      {code && (
        <SyntaxHighlighter
          showLineNumbers
          style={styles.a11yDark}
          language='javascript'
        >
          {codestring}
        </SyntaxHighlighter>
      )}
    </section>
  )
}
function Confirm() {
  const [state, setState] = useState("Nothing's been confirmed, nor denied")
  const [code, setCode] = useState(false)
  const codestring = `async () => {
    try {
      await confirm("Read some of the things we've written")
      setState('Yay, so you read all that')
    } catch (e) {
      setState("Oh, we're sorry about that :(")
    }
  }`
  return (
    <section>
      <h2>Confirms</h2>
      <p>Confirms are pretty self explanatory. You can confirm or deny them.</p>
      <div className='state'>
        <p>{state}</p>
      </div>
      <div className='buttons'>
        <button
          onClick={async () => {
            try {
              await confirm("Read some of the things we've written")
              setState('Yay, so you read all that')
            } catch (e) {
              setState("Oh, we're sorry about that :(")
            }
          }}
        >
          Make a confirm
        </button>
        <button onClick={() => setCode((code) => !code)}>
          {code ? 'Hide' : 'Show'} Code
        </button>
      </div>
      {code && (
        <SyntaxHighlighter
          showLineNumbers
          style={styles.a11yDark}
          language='javascript'
        >
          {codestring}
        </SyntaxHighlighter>
      )}
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className='first'>
        <p>Developed and Maintained by Alek Angelov</p>
      </div>
      <ul className='second'>
        <li>
          <a href='#'>NPM</a>
        </li>
        <li>
          <a href='#'>GITHUB</a>
        </li>
        <li>
          <a href='https://alekangelov.com'>WEBSITE</a>
        </li>
      </ul>
    </footer>
  )
}

function Styling() {
  return (
    <section>
      <h2>Styling</h2>
      <p>
        It's pretty easy to style the components, they follow simple naming
        structures and it's encouraged to write your own styles
      </p>
      <SyntaxHighlighter language='css' style={styles.a11yDark}>
        {`.alert {
  /* this is the background of the alert */
  &-inner {
    /* body wrapper of the alert */
  }
  &-title {
    /* title of the alert */
  }
  &-text {
    /* text describer of the alert */
  }
  &-input {
    /* the prompt input field */
  }
  &-buttons {
    /* button wrapper of the alert */
    &_ok {
      /* ok button of the alert */
    }
    &_cancel {
      /* cancel button of the alert */
    }
  }
}`}
      </SyntaxHighlighter>
    </section>
  )
}

const App = () => {
  const [state, setState] = useState("Nothing's been prompted")
  return (
    <>
      <AlertProvider />
      <div className='wrapper'>
        <h1>
          <span role='icon'>✨</span> React-Alert-Async
        </h1>
        <h2>
          A simple way of managing your alerts, prompts and confirms without
          defaulting to the browsers ugly implementations
        </h2>
        <div className='sections'>
          <Alert />
          <Confirm />
          <Prompt />
          <Styling />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
