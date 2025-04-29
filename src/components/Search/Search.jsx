import './search.js'
import IconDropdownCircle from '../../icons/IconDropdownCircle.svg'

const Search = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <button className="bg-[#5179EF] h-10 w-10 rounded-s-lg flex items-center justify-center ">
          <img src={IconDropdownCircle} alt="" />
        </button>
        <input
          type=""
          className="h-10 w-56 pl-2 m-0 z-0 focus:outline-none bg-[#fff]"
          placeholder="Pesquisar Cidade..."
        />
        <button className="bg-[#5179EF] h-10 w-10 rounded-e-lg ">
        <i className="fa-solid fa-magnifying-glass text-white"></i>
        </button>
      </div>  
    </>
  );
}

export default Search