# react-alert-async

> A simple to use Alert/Confirmation system for React. On the server or the client.

[![NPM](https://img.shields.io/npm/v/react-alert-async.svg)](https://www.npmjs.com/package/react-alert-async) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

```bash
yarn add react-alert-async
```

## Usage

Honestly, it's as simple as one two three.

```tsx
import AlertProvider, { alert, confirm, prompt } from 'react-alert-async'
import 'react-alert-async/dist/index.css'

function App() {
  return (
    <>
      <AlertProvider />
      <button
        onClick={() =>
          alert("Yay, it's an alert", { duration: 2000, title: 'Custom Title' })
        }
      />
    </>
  )
}
```

## Styling

It's pretty easy to style the components, they follow simple naming structures and it's encouraged to write your own styles

```scss
.alert {
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
}
```

## Sample Components

All taken from the demo, but modified just a bit.

### Alert

```jsx
function Alert() {
  const [state, setState] = useState("Nothing's been alerted")
  return (
    <section>
      <div className='state'>
        <p>{state}</p>
      </div>
      <div className='buttons'>
        <button
          onClick={async () => {
            try {
              const x = await alert('Idk write something meaningful here')
              setState('Yay, so you read all that')
            } catch (e) {
              setState("Oh, we're sorry about that :(")
            }
          }}
        >
          Make an alert
        </button>
      </div>
    </section>
  )
}
```

### Prompt

```jsx
function Prompt() {
  const [state, setState] = useState("Nothing's been prompted")
  return (
    <section>
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
      </div>
    </section>
  )
}
```

### Confirm

```jsx
function Confirm() {
  const [state, setState] = useState("Nothing's been confirmed, nor denied")
  return (
    <section>
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
      </div>
    </section>
  )
}
```

## License

MIT © [alekangelov](https://github.com/alekangelov)
