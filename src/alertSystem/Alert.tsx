import React, {
  useState,
  FunctionComponent,
  ComponentClass,
  useCallback
} from 'react'
const { render, unmountComponentAtNode } = require('react-dom')
import styles from '../scss/alert.scss'
interface AlertProps {
  text: string | FunctionComponent | ComponentClass
  onClick: (value: boolean | string) => void
  className: string
  duration: number
  prompt?: boolean
  confirm?: boolean
  title?: string
}
interface Options {
  className: string
  title?: string
  duration: number
}

const CustomAlert = (props: AlertProps) => {
  const [animation, setAnimation] = useState<any>(styles.animationIn)
  const [promptState, setPrompt] = useState('')
  const close = useCallback(() => {
    const parent = document.getElementById(styles.alertProvider) as HTMLElement
    setAnimation(styles.animationOut)
    setTimeout(() => {
      unmountComponentAtNode(parent)
    }, (props.duration || 500) - 50)
  }, [])
  const handleClick = (value: boolean) => {
    if (props.prompt) {
      if (value) {
        props.onClick(promptState)
      } else {
        props.onClick(value)
      }
    } else {
      props.onClick(value)
    }
    close()
  }
  const eventListener = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClick(false)
      return close()
    }
    if (e.key === 'Enter') {
      handleClick(true)
      return close()
    }
  }
  React.useEffect(() => {
    window.addEventListener('keyup', eventListener)
    setTimeout(() => setAnimation(styles.animationHold), props.duration || 500)
    return () => {
      window.removeEventListener('keyup', eventListener)
    }
  }, [])
  return (
    <div className={[styles.alert, 'alert'].join(' ')}>
      <div
        style={{ animationDuration: `${(props.duration || 500) / 1000}s` }}
        className={[styles['alert-inner'], 'alert-inner', animation].join(' ')}
      >
        {typeof props.text === 'function' ? (
          <props.text />
        ) : (
          <React.Fragment>
            {props.title ? (
              <h4 className='alert-title'>{props.title}</h4>
            ) : (
              <h4 className='alert-title'>
                <React.Fragment>
                  {props.prompt && 'Please fill in the input'}
                  {props.confirm && 'Please confirm'}
                  {!props.prompt && !props.confirm && 'Alert'}
                </React.Fragment>
              </h4>
            )}
            <p className='alert-text'>{props.text}</p>
            {props.prompt && (
              <div className={styles.prompt}>
                <input
                  value={promptState}
                  onChange={(e) => setPrompt(e.target.value)}
                  className={[styles.input, 'alert-input'].join(' ')}
                  type='text'
                />
              </div>
            )}
          </React.Fragment>
        )}
        <div className={[styles.buttons, 'alert-buttons'].join(' ')}>
          <button
            className={[styles.ok, 'alert-buttons_ok'].join(' ')}
            onClick={() => handleClick(true)}
          >
            OK
          </button>
          {(props.confirm || props.prompt) && (
            <button
              className={[styles.cancel, 'alert-buttons_cancel'].join(' ')}
              onClick={() => handleClick(false)}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export async function alert(
  text: string | FunctionComponent | ComponentClass,
  options: Options
) {
  const parent = document.getElementById(styles.alertProvider) as HTMLElement
  return new Promise((resolve, reject) => {
    render(
      <CustomAlert
        onClick={(e) => (e ? resolve(e) : reject(e))}
        text={text}
        prompt={false}
        {...options}
      />,
      parent
    )
  })
}
export async function confirm(text: string, options: Options) {
  const parent = document.getElementById(styles.alertProvider) as HTMLElement
  return new Promise((resolve, reject) => {
    render(
      <CustomAlert
        onClick={(e) => (e ? resolve(e) : reject(e))}
        text={text}
        confirm={true}
        {...options}
      />,
      parent
    )
  })
}
export async function prompt(text: string, options: Options) {
  const parent = document.getElementById(styles.alertProvider) as HTMLElement
  return new Promise((resolve, reject) => {
    render(
      <CustomAlert
        onClick={(e) => (e ? resolve(e) : reject())}
        text={text}
        prompt={true}
        {...options}
      />,
      parent
    )
  })
}
