import {useSinglePrismicDocument, useAllPrismicDocumentsByType} from "@prismicio/react";
import { createPath, useParams } from "react-router-dom";


const Article = () => {
  const params = useParams();
  const [documents] = useAllPrismicDocumentsByType('post')
  return(
    <section>
    {documents ?( 
        documents.map((document)=>{
        return(
        document.id==params.id &&
            <main>
            <div className='title'>
                <h1>{document.data.title[0].text}</h1>
            </div>
            <div className='content'>
                {console.log(document.data.allthecontent)}
            </div>
            </main>
        )})
    ):(
        <h1>error</h1>
    )}
    </section>
)}

 

export default Article;