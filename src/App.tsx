import Biography from '@components/Biography';
import SoundcloudPlayer from '@components/SoundcloudPlayer';
import SocialNetworkMenu from '@components/SocialNetworksMenu';


function App() {

  // Array of Soundcloud track IDs
  const trackIds = [
    "1985596363", // So so beautilful
    "2030050792", // French Cocktail
    "2025117380", // The Tower
    "1997397563", // Feel so good
    "1955115635", // The starry sky
    "1938287549", // The knight
  ]
  
  return (
    <>
      <SocialNetworkMenu />
      
      <main className='container px-2 mb-5'>
        
        <Biography />

        <h2 className='is-size-3 has-text-weight-bold mb-1'>Last Releases:</h2>

        <div className="columns is-0-mobile is-multiline is-justify-content-center">

          {
            // render a SoundcloudPlayer for each trackId
            trackIds.map((trackId) => (
              <div key={trackId} className="column is-one-quarter is-full-mobile">
                <SoundcloudPlayer trackId={trackId} className="p-2" />
              </div>
            ))
          }

          <div className="column is-two-quarter is-full-mobile">
            <a className='soundcloud-djkat-link p-2 has-text-primary-invert is-size-4 has-text-weight-bold has-background-warning is-flex is-justify-content-center is-align-items-center' target='_blank' href="https://soundcloud.com/dj_kat_official">Listen more on soundcloud</a>
          </div>
        </div>
      </main >
    </>
  )
}

export default App
