import Image from 'next/image';

export const SimpleCard = ({ name, image, price, rating, votes, popular, available }) => {
  return (
    <div className="bg-[--grey-5] rounded-xl p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 dark:bg-transparent">

      <div className="relative flex items-end overflow-hidden rounded-xl">
        <Image className='!relative' fill src={ image } alt={ name } sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'/>
          {
            popular
              ? (
                <div class="absolute top-3 left-3 inline-flex items-center rounded-xl bg-[--gold-1] p-1 shadow-md">
                  <span class="px-1 text-xs text-[--black]">Popular</span>
                </div>
                )
              : (<></>)
          }
      </div>

      <div className="mt-1 p-2 flex justify-between items-center">
        <h2 className="text-white font-bold">{ name }</h2>
        <div className="text-xs bg-[--green-1] text-[--black-1] rounded-lg py-1 px-2 hover:bg-[--green-5] hover:text-[--white-1] ">
          <p>{ price }</p>
        </div>
      </div>

      

      <div className="flex justify-between items-center">
        <div className="flex items-center">
        {
          votes === 0 
            ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className="ml-1 text-sm">Sin votos</p>
                
              </>
            )
            : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className="ml-1 text-sm">{ rating } ({ votes } votos)</p>
              </>
            )
        }
        </div>
        {
          available
            ? (<div className=""></div>)
            : (<div className="text-[--orange-1] font-bold">Agotado</div>)
        }
      </div>

    </div>
  )
}


