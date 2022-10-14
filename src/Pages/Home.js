import { useAllPrismicDocumentsByType} from '@prismicio/react'
import {Link} from 'react-router-dom';


function Home() {
    const [documents] = useAllPrismicDocumentsByType('post')
  return (
    <>
    {documents && 
          documents.map((document)=>{
            return(
              <main>
                  <div className='title'>
                        <Link to={`/${document.id}`}>
                        {console.log(document)}
                        <h1>{document.data.title[0].text}</h1>
                        </Link>
                  </div>
                  <div className='content'>
                    <h2>{document.data.content[0].text}</h2>
                  </div>
              </main>
            )}
          )}
    </>
  )
}

export default Home;