import logo from './logo.svg';
import './App.css';
import { PrismicRichText, useFirstPrismicDocument, useAllPrismicDocumentsByType} from '@prismicio/react'
import { useEffect } from 'react';

function App() {
  const [documents, { state, error }] = useAllPrismicDocumentsByType('post')
  return (
    <>
    {documents &&
    <main>
    <div className='title'>
      <h1>{documents[0].data.title[0].text}</h1>
    </div>
    <div className='content'>
      <h2>{documents[0].data.content[0].text}</h2>
    </div>
    </main>
    }
    </>
  )
}

export default App;
