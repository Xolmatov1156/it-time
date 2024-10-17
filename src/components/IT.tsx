import { useState } from "react";
import It1 from "../assets/it-1.png";
import It2 from "../assets/it-2.png";
import It3 from "../assets/it-3.png";

const IT = () => {
  const [phone, setPhone] = useState("+998 ");

  return (
    <section className="it">
      <div className="my-[50px] w-[1250px] mx-auto flex justify-between">
        <div className="p-[25px] w-[738px] bg-[#F3F8FF] h-[407px] rounded-[25px] border border-gray-300">
          <h3 className="text-[30px] noto-norm text-[#444444] pb-[20px]">
            IT - bu kelajak, zamonaviy kasblardan birini IT Time Academy bilan
            tajribali ustozlardan o'rganing!
          </h3>
          <div className="flex justify-between">
            <img src={It1} alt="it-1" width={208} height={218} />
            <img src={It2} alt="it-2" width={208} height={218} />
            <img src={It3} alt="it-3" width={208} height={218} />
          </div>
        </div>
        <div className="p-[30px] flex flex-col gap-[30px] w-[482px] bg-[#F3F8FF] h-[407px] rounded-[25px] border border-gray-300">
          <h3 className="text-[35px] noto-norm">Bepul konsultatsiya</h3>
          <p className="text-[17px] noto-norm">
            Telefon raqamingizni yozib qoldiring, biz Siz bilan bog'lanamiz va
            barcha savollaringizga javob beramiz!
          </p>
          <form className="flex flex-col gap-[8px]">
            <input
              required
              type="text"
              placeholder="Ismingiz"
              className="py-[10px] px-[15px] rounded-lg border border-gray-300 w-full outline-none placeholder:text-gray-500"
            />
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="py-[10px] px-[15px] rounded-lg border border-gray-300 w-full outline-none placeholder:text-gray-500"
            />
            <button className="p-[10px] w-full linear text-white rounded-lg">
              Yuborish
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default IT;
