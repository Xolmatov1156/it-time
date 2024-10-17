import HeroImg from '../assets/hero.png'
const Hero = () => {
  return (
    <section className="bg-[#F5F6F8]">
        <div className="flex justify-between mx-auto w-[1250px] h-[563px] pt-[220px]">
        <div className="w-[510px]">
            <h2 className="text-[46px] font-bold noto leading-[60px]">Tajribaga asoslangan <span className="text-red-600">ishonchli</span> kelajak</h2>
            <p className='text-[#5B6871] text-[18px] mt-[18px]'>Qisqa muddatda o’z portfolioyingizga ega bo’ling</p>
            <button className='bg-[#C60205] text-white w-[164px] py-[14px] mt-[40px] rounded-lg'>Ariza qoldirish</button>
        </div>
        <div>
            <img src={HeroImg} alt="hero" className='w-[625px] h-[300px]'/>
        </div>
        </div>
    </section>
  )
}

export default Hero