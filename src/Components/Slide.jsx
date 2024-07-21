import { useState } from "react";
import { BackArrow } from "../assets/BackArrow";
import { ForwardArrow } from "../assets/ForwardArrow";

export const Slide = () => {
  const [current, setCurrent] = useState(0);
  const [images, setImage] = useState([
    "https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fCLy5GghCAPtYF~~U28~GaAdAp88xIeWT8FSkxHLq4JKnZuK1Ax07wga4n6pArK3wCb0p3KuijpLEmUvLcVvF5JxOkJWk9AU1rXxAtZd4woX~Gpb6eSSvDZZqMcP8h-3zhg9ut2mf4VzWiIiDHKoa9NFXk8w0G04hXxZ2xt~73IMrGSXvFTz~kv0Vk4MPJFtZHNiElyvYHEdlUlU9HVpQZdHPzvhc2XEN6DiTGUzQFh~QgwOE1h-gKcycyMG3CwVSq-PGcJpBzOKf20idyHPjhXZtUuuqxXW56q6b~~6JJETVtLbxz~ERtCcjXI3euAOxRmG8ebg83eq01thZq~zEg__",
    "https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K24Nzd5zJ1XEOcGTJPxkBNveQUmndhW2SktSLjMo1rPdg-y6sSyfDMRGkalCHYmwdMT3C5~hoo2ioFKLAFXd-bB1v4dX0PwPh89I0r-7xQk1GAI9lDBSY7VcLgv3iZOVLZW7YI9Dua0XMuqUW47gVpcMeJjvpE7sg3doPNrg44W1R3dYjBkeZlJEsNMN7Q23yAngjRM5DAxP8tzVL-m77WMg3uvi9kmMTdUw2WFBbr1UjC5zWKXHEBYBe9oa-NU1QMwvTR94X1L5nztOmunq1zU~1fm18W-XfaHPUbJzP8j~VaHlpZomJ0NYzrFizwh9ByK8Fal~uduwxFQrizyz-Q__",
    "https://s3-alpha-sig.figma.com/img/7465/4a8f/67369b797c8fb2e96a533fd515fb2939?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eR9T678lH5NmwfDTe6yRWXlAe8zperPTHPCLwvB0HPZmNh3Lbkjj2Al9VbL9mZfDu5X2wQ-cESdyMqgtxd4tB~NoTvKnp~Wwk52Rjr5CiSeUX0bjJgI3VUcdFId1tkegx~Kid47O9763PMH~VfZXlISb2D37iLEWPWy-PmVEVONQBkdXWisXeidu7wjWNV3hkH4shYudzDQsM-73RaMiULbU3uVg0rHLKTYFtEx~0GG-os405KBI0U6J8yqlIka7EOHthEqwl07Te-DF9-gaS9B7XhbGBGszLwmRQO5M9fGYFBgZH8h1-zoaOKna53UZOWTzzgyL6ML~F~a4HjUUdg__",
    "https://s3-alpha-sig.figma.com/img/3969/1462/48009e641f454298f62e13de84ac0a09?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hg6MvmikNHuCyjI~6iWhlJ~wKkenUTtg2he6zplRVn-ZdYhPk22AkGm0WZZSS0nzOgSSk1a0jYrPZuttGkdmXUjXMYmq~UaB0ASlQO3MmICdKyyK5~wta5HZADAHExoKzIa0AgcmtKuJ~w71D9qSXdZCUbo2cBsahXHb6EqqSReNinE~pksCb4q1jM8OGbhb1b0AJ5HFiDEHfoakXC62eQUmh8E9tCLCBHwiuX6yXt8SCb10pnO-qyau5wOzc5~boUJMe1QByQ9-V8Z~LZtRDadAnGxe9T1PWdWixDeTMGSEIyplXUpP6kVgKRMFkeX77u3V2FpdeHFnY17dbzsEKQ__",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const leftClick = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const rightClick = () => {
    if (current < images.length - 1) {
      setCurrent(current + 1);
    } else if (current == images.length - 1) {
      setCurrent(0);
    }
    console.log(current);
  };

  return (
    <div className="flex flex-col mx-auto max-w-[1216px] h-[651px] py-[32px]">
      <div>
        <img
          className="max-w-[1216px] h-[600px]"
          src={images[current]}
          alt={images[current]}
        />
        <div className="flex flex-col max-w-[518px] bg-white relative z-10 gap-2 p-2 mx-auto">
          <p className="flex px-1 py-2 justify-start items-center gap-1 bg-blue-300 text-white">
            Technology
          </p>
          <h2 className="text-4xl">
            Grid system for better Design User Interface
          </h2>
          <p>August 20, 2022</p>
        </div>
      </div>

      <div className="flex flex-end justify-end">
        <button
          className="w-10 h-10 rounded-md inline-flex justify-center items-center border-2 border-black"
          onClick={leftClick}
        >
          <ForwardArrow />
        </button>
        <button
          className="w-10 h-10 rounded-md inline-flex justify-center items-center border-2 border-black"
          onClick={rightClick}
        >
          <BackArrow />
        </button>
      </div>
    </div>
  );
};
