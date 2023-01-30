import SpeakerDetails from "./SpeakerDetails";

function Speakers() {
  return (
    <div
      className="bg-black bg-opacity-10 speaker-container pl-10 pr-10 pt-10 pb-10"
      id="speaker-container"
    >
      <div className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-7xl md:text-8xl lg:text-8xl dark:text-orange-600 m-auto inline">
        SPEAKERS
      </div>
      <div className=" flex flex-wrap justify-center ">
        {SpeakerDetails.map((item) => (
          <div className="flex flex-col ml-16 mr-10 mt-10">
            

            <img
              className=" rounded-full	w-80 "
              src={item.imagesrc}
              alt="Speaker"
              />
        
            <div className="text-2xl font-bold text-orange-600">
              {" "}
              {item.name}
            </div>

            
            <div className="text-2xl font-bold opacity-70"> {item.occ}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Speakers;

// {team.filter(obj => obj.id !== 0).map(({id,src,alt,name,post})=>

// <div key={id} className="id-card">
//     <div>
//     <img  src={src} alt={alt}/>
//     <p id="name">{name}</p>
//     </div>
//     <div className="post">
//         <div className="post-text">{post}</div>
//     </div>
// </div>

// )}
