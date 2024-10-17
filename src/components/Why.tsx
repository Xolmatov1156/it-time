import Mablag from "../assets/mablag.png";
import Bilim from "../assets/bilim.png";
import Mutaxassis from "../assets/mutaxassis.png";
import Amaliyot from "../assets/amaliyot.png";
import Coworking from "../assets/coworking.png";
import Sertifikat from "../assets/sertifikat.png";

const Why = () => {
  return (
    <div className="w-[1250px] mx-auto font-normal ">
      <h2 className="text-[40px] noto text-center py-[50px]">
        Nega aynan biz?
      </h2>
      <div className="w-full p-[30px] border-y-[2px] border-[#9A9A9A] flex justify-between items-center">
        <img src={Mablag} alt="mablag" height={146} width={165} />
        <h3 className="w-[423px] text-[37px] text noto">
          Mablag'ingiz yo'qmi?- yechimi bor!
        </h3>
        <p className="w-[534px] text-[18px] noto-norm text-[#444444]">
          {" "}
          Agarda Sizning kurslarga qatnashish uchun mablag'ingiz yetarli
          bo'lmasa, bundan tushkunlikka tushmang. Biz Sizga bu muammoni hal
          etishda yordam beramiz.
        </p>
      </div>
      <div className="w-full p-[30px] border-b-[2px] border-[#9A9A9A] flex justify-between items-center">
        <img src={Bilim} alt="mablag" height={146} width={165} />
        <h3 className="w-[423px] text-[37px] text noto">
          Bilimingizni muvaffaqiyatli soting!
        </h3>
        <p className="w-[534px] text-[18px] noto-norm text-[#444444]">
          Bizning kurslarimiz nafaqat aniq bir zamonaviy kasbni o'rgatadi balki,
          mijozlar bilan ishlashni, qo'shimcha daromad qilishni va to'g'ri ish
          joyini tanlashni ham o'rgatadi.
        </p>
      </div>
      <div className="w-full p-[30px] border-b-[2px] border-[#9A9A9A] flex justify-between items-center">
        <img src={Mutaxassis} alt="mablag" height={146} width={165} />
        <h3 className="w-[450px] text-[36px] text noto">
          Kuchli mutaxassislardan sifatli ta'lim oling!
        </h3>
        <p className="w-[534px] text-[18px] noto-norm text-[#444444]">
          {" "}
          Bizning barcha Mentorlarimiz kamida 3 yil tajribaga ega va ko'plab
          loyihalar muallifi bo'lgan mutaxassislardir. Bizning o'quv
          dasturlarimiz ular ishtirokida shakillantiriladi. Bu hammasi Sizning
          sifatli ta'lim olishingiz uchun!
        </p>
      </div>
      <div className="w-full p-[30px] border-b-[2px] border-[#9A9A9A] flex justify-between items-center">
        <img src={Amaliyot} alt="mablag" height={146} width={165} />
        <h3 className="w-[423px] text-[37px] text noto">
          Amaliyot, real loyihalar va portfolio!
        </h3>
        <p className="w-[534px] text-[18px] noto-norm text-[#444444]">
          {" "}
          Bizning kursimiz davomida o'quvchilar real loyihalarni tamomlab
          mijozga taqdim etishadi. Bundan yaxshiroq amaliyot bo'lmasa kerak! Va
          bu portfolio uchun juda foydali!
        </p>
      </div>
      <div className="w-full p-[30px] border-b-[2px] border-[#9A9A9A] flex justify-between items-center">
        <img src={Coworking} alt="mablag" height={146} width={165} />
        <h3 className="w-[450px] text-[36px] text noto">
          Zamonaviy muhit, bepul Coworking va Wi-fi
        </h3>
        <p className="w-[534px] text-[18px] noto-norm text-[#444444]">
          {" "}
          It Time Academy o'quv markazi zamon talabiga javob beradigan barcha
          imkoniyatlar va texnologiyalar bilan jihozlangan. Bularning barchasi
          bizning o'quvchilarimiz uchun bepul!
        </p>
      </div>
      <div className="w-full p-[30px] border-b-[2px] border-[#9A9A9A] flex justify-between items-center">
        <img src={Sertifikat} alt="mablag" height={146} width={165} />
        <h3 className="w-[423px] text-[37px] text noto">Sertifikat</h3>
        <p className="w-[534px] text-[18px] noto-norm text-[#444444]">
          {" "}
          It Time Academy kurslarini muvaffaqiyatli tamomlagan barcha
          o'quvchilarga Sertifikat taqdim etiladi!
        </p>
      </div>
    </div>
  );
};

export default Why;
