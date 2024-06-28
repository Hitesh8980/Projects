import React from 'react'
import Navbar from '../../Structure/Navbar'
import Smallbody from '../../Structure/smallbody'
import TrendingGIfts from '../../Structure/TrendingGIfts'
import ImageDisplay from '../../Structure/ImageDisplay'
import Footer from '../../Structure/Footer'
import Popular from '../../Structure/Popular'
import { Box } from '@chakra-ui/react'
import Content from '../../Structure/Content'

const Home = () => {
  return (
    <Box>
     <Navbar />
    <Smallbody/>
    <TrendingGIfts />
    <ImageDisplay />
    <Popular />
    <Content/>
    <Footer />
    </Box>
  )
}

export default Home
