import { SimpleCard } from "./SimpleCard";
import Image from 'next/image';
import vectorFile from '../assets/img/vector.svg';

const getInfo = async( ) => {
  const data = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    return data;
  })
  .catch(error => {
    console.log(error)
  });

  // console.log(`Data: ${JSON.stringify(data) } `);

  return data;
}

export const GridCard = async() => {

  const cards = await getInfo();
  console.log( cards );

  return (
    <div className="absolute bottom-0 top-20 sm:top-40 xl:top-64 left-0 pt-5 bg-gray-100 h-max md:h-screen rounded-xl dark:bg-gray-700 ">

      <div className="relative py-3 px-52 text-center">
        <Image width={180} src={ vectorFile } className="absolute top-0 right-[30%] !text-[--orange-1]" /> 
        <h3 className="mt-14 text-2xl p-1 mb-2">Nuestra colección</h3>
        <p className="text-base p2">Presentamos nuestra colección de café, una selección de cafés únicos de diferentes tostados y orígenes, tostados por expertos en pequeños lotes y enviados frescos cada semana.</p>
      </div>
      
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 ">
        
        {
          cards.map( card => {
            return (
              <SimpleCard {...card} />
            )
          })
        }
      </div>

      
    </div>
  )
}
