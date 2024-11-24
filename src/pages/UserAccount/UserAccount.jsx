import CustomCard from "../../components/shared/CustomCard";
import { infoAdmin } from "../../helpers/constants";

const UserAccount = () => {

  return (
    <div className="mx-auto py-8 grid grid-cols-12">
      <div className="absolute inset-0 -z-10 col-span-12">
        <img
          src="https://homestore.tigo.net.bo/generadorWeb/assets/img/fondo.jpg"
          alt=""
          className="absolute h-screen w-screen object-cover -z-20 col-span-12"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-500 to-gray-500 opacity-50 col-span-12"></div>
      </div>
      <p className="text-center text-6xl font-bold mb-6 text-blue-50 col-span-12">
        ¿Qué quieres hacer?
      </p>

      <section className="grid grid-cols-12 col-span-12">
        <div className="col-span-1"></div>
        <div className="col-span-10 grid grid-cols-10 gap-x-5">
          {infoAdmin.map((item, index) => (
            <CustomCard key={index} info={item} />
          ))}
        </div>
        <div className="col-span-1"></div>
      </section>
    </div>
  );
};

export default UserAccount;
