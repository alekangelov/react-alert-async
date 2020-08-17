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

              setState('Yay, so you read all that')
            } catch (e) {
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

function AlertWithCustomBody() {
  const [state, setState] = useState("Nothing's been alerted")
  const [code, setCode] = useState(false)
  const codestring = `<button
  onClick={async () => {
    try {
      const x = await alert(
        () => (
          <div>
            <h1>I'm the title?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Esse, id sunt nulla nam praesentium necessitatibus
              voluptate consequatur, nesciunt ut cupiditate distinctio
              natus dolorem debitis adipisci non deleniti dolores rem
              vitae.
            </p>
          </div>
        ),
        {
          duration: 500
        }
      )

      setState('Yay, so you read all that')
    } catch (e) {
      setState("Oh, we're sorry about that :(")
    }
  }}
>
  Make a Funcitonal Alert
</button>
<button
  onClick={async () => {
    try {
      const x = await alert(
        class extends React.Component {
          render() {
            return (
              <div>
                <h1>I'm the title?</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Esse, id sunt nulla nam praesentium
                  necessitatibus voluptate consequatur, nesciunt ut
                  cupiditate distinctio natus dolorem debitis adipisci
                  non deleniti dolores rem vitae.
                </p>
              </div>
            )
          }
        },
        {
          duration: 500
        }
      )

      setState('Yay, so you read all that')
    } catch (e) {
      setState("Oh, we're sorry about that :(")
    }
  }}
>
  Make a Class Alert
</button>`
  return (
    <section>
      <h2>Functional/Class Alerts</h2>
      <p>
        If you pass in a react function or a class instead of text, the whole
        body of the component including the title will get replaced by the
        function/class. This allows you to write better alerts/confirms/prompts
        while getting all the benefits that React offer you. You can do this
        with the other alerts, not just the alert().
      </p>
      <div className='state'>
        <p>{state}</p>
      </div>
      <div className='buttons'>
        <button
          onClick={async () => {
            try {
              const x = await alert(
                () => (
                  <div>
                    <h1>I'm the title?</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Esse, id sunt nulla nam praesentium necessitatibus
                      voluptate consequatur, nesciunt ut cupiditate distinctio
                      natus dolorem debitis adipisci non deleniti dolores rem
                      vitae.
                    </p>
                  </div>
                ),
                {
                  duration: 500
                }
              )

              setState('Yay, so you read all that')
            } catch (e) {
              setState("Oh, we're sorry about that :(")
            }
          }}
        >
          Make a Funcitonal Alert
        </button>
        <button
          onClick={async () => {
            try {
              const x = await alert(
                class extends React.Component {
                  render() {
                    return (
                      <div>
                        <h1>I'm the title?</h1>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Esse, id sunt nulla nam praesentium
                          necessitatibus voluptate consequatur, nesciunt ut
                          cupiditate distinctio natus dolorem debitis adipisci
                          non deleniti dolores rem vitae.
                        </p>
                      </div>
                    )
                  }
                },
                {
                  duration: 500
                }
              )

              setState('Yay, so you read all that')
            } catch (e) {
              setState("Oh, we're sorry about that :(")
            }
          }}
        >
          Make a Class Alert
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
          <a href='http://npmjs.com/package/react-alert-async'>NPM</a>
        </li>
        <li>
          <a href='https://github.com/alekangelov/react-alert-async/'>GITHUB</a>
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
        structures and it's encouraged to write your own styles.
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

function Installation() {
  return (
    <section>
      <h2>Installation and Usage</h2>
      <p>Honestly, it's as simple as one two three.</p>
      <SyntaxHighlighter language='bash' style={styles.a11yDark}>
        {`yarn add react-alert-async`}
      </SyntaxHighlighter>
      <p>And then in your little index file you just add the Provider</p>
      <SyntaxHighlighter language='javascript' style={styles.a11yDark}>
        {`import AlertProvider, {alert, confirm, prompt} from 'react-alert-async';
import 'react-alert-async/dist/index.css'

function App() {
  return (
    <>
      <AlertProvider />
      <button onClick={()=>alert("Yay, it's an alert", {duration: 2000, title: "Custom Title"})} />
    </>
  )
}`}
      </SyntaxHighlighter>
    </section>
  )
}

const App = () => {
  return (
    <>
      <AlertProvider />
      <div className='wrapper'>
        <h1>
          <span role='icon' aria-roledescription='the icon'>
            <img src={require('./icon.png')} alt='the project icon' />
          </span>{' '}
          React Alert Async
        </h1>
        <h2>
          A simple way of managing your alerts, prompts and confirms without
          defaulting to the browsers ugly implementations
        </h2>
        <div className='sections'>
          <Installation />
          <Alert />
          <AlertWithCustomBody />
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
