/* eslint-disable react/self-closing-comp */
import './spinnerLoader.css'

const SpinnerLoader = () => {
  return (
    <span className="lds-ellipsis">
      <span>.</span>
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </span>
  )
}

export default SpinnerLoader
