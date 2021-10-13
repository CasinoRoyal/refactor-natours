import {ReactNodeArray} from 'react'
import { Provider } from 'react-redux';

export function StateProvider(children: ReactNodeArray) {

  return <Provider state={state}>{...children}</Provider>
}
