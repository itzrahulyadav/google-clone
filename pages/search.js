import Head from 'next/head'
import Header from '../components/Header'
import {API_KEY,CONTEXT_KEY} from '../keys'
import Response from '../Response';
import {useRouter} from 'next/router';
import SearchResults from '../components/SearchResults';

function Search({results}) {

  console.log(results);
  const router = useRouter();

  return (
    <div>
        <Head>
            <title>Google - {router.query.term}</title>

        </Head>
        <Header />
        <SearchResults results = {results} />
    </div>
  )
}


export default Search

export async function getServerSideProps(context){
   
    const useDummyData = false;
    const startIndex = context.query.start || 1;


    
    const data = useDummyData?Response:await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then(res => res.json());



    //after the server has rendered pass the results to the client

    return{
      props:{
        results:data
      },
    }



}