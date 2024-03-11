import React from 'react'
import {Helmet} from 'react-helmet-async'
const Title = ({title="LOMLER",description="ChatApp named LOMLER"}) => {
  return <Helmet>
    <title>{title}</title>
    <meta name='description' content={description}/>
  </Helmet>
}

export default Title