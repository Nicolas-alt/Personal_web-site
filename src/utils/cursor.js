/* eslint-disable new-cap */
import kursor from 'kursor'
import { usecallback } from 'react'

const cursor = usecallback(() => {
  // eslint-disable-next-line no-new
  new kursor({
    type: 1
  })
})

export default cursor
