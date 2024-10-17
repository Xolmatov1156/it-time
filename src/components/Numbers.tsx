const Numbers = () => {
  return (
    <section className="bg-[#F5F6F8] mt-[30px]">
        <div className="w-[1250px] mx-auto p-[40px]">
            <h2 className="text-[40px] text-center noto mb-[40px]">Qiziqarli raqamlar</h2>
            <div className="flex">
                <div className="w-[396px] h-[112px] p-[15px] flex justify-center flex-col border-r-[3px] border-red-600 items-center">
                    <h3 className="text-[48px] noto-norm">100</h3>
                    <p className="noto-norm">dan ortiq mutaxassislar tayyorlaganmiz</p>
                </div>
                <div className="w-[396px] h-[112px] p-[15px] flex justify-center flex-col border-r-[3px] border-red-600 items-center">
                    <h3 className="text-[48px] noto-norm">10</h3>
                    <p className="noto-norm">dan ortiq kuchli mentorlar</p>
                </div>
                <div className="w-[396px] h-[112px] p-[15px] flex justify-center flex-col  items-center">
                    <h3 className="text-[48px] noto-norm">6</h3>
                    <p className="noto-norm">dan ortiq mutaxassislar tayyorlaganmiz</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Numbers