import React from 'react'

const Home = () => 
  <div className='center'>
    <h3>Welcome to PhotoSearch!</h3>
    <hr/>
    <h4>Usage Guide</h4>
    <p>
      Navigate to the search tab and search for high quality photos.  
      Clicking a photo will navigate to the website the photo is hosted on.
    </p>
    <p>
      There is also a list of recently viewed photos under the "Recent Views" tab.
    </p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/4VvTQprTSa8" frameBorder="0" title='walkthrough'></iframe>
  </div>

export default Home