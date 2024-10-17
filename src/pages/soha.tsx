import Img from './assets/amaliyot.png';
const Soha = () => {
  return (
    <div className="p-4 max-w-sm h-[400px] mx-auto bg-white rounded-lg shadow-md shadow-gray-800 mt-[20px]">
      <div className="relative">
        <img
          src={Img}
          alt="iOS"
          className="w-full h-[100px] object-contain rounded-t-lg"
        />
        <div className="absolute right-[225px] bg-red-700 text-white text-xs font-bold py-1 px-2 rounded-t-md speech-bubble rounded-br-md w-[150px] h-[35px] flex items-center ">
          <i className="fa fa-star mr-1"></i> MUDDATLI TO'LOV
        </div>
      </div>

      <div className="p-4 mt-[50px]">
        <h3 className="text-lg font-bold">IOS</h3>
        <p className="text-sm text-gray-500">Narxi</p>
        <p className="text-xl font-semibold">13 760 000 sumdan</p>

        <div className="flex items-center mt-4 text-gray-500">
          <i className="fa fa-clock-o mr-2"></i>
          <span>8 oy</span>
        </div>
      </div>
    </div>
  )
}

export default Soha