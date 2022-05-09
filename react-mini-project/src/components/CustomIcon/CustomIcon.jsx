import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";

export const CustomIcon = ({ idInput }) => {
  return (
    <section>
      {idInput === "username" ? (
        <AiOutlineUser className="absolute top-6 left-4 text-xl" />
      ) : null}

      {idInput === "password" ? (
        <RiLockPasswordFill className="absolute top-6 left-4 text-xl" />
      ) : null}

      {idInput === "search" ? (
        <AiOutlineSearch className="absolute top-8 left-[18%] text-xl" />
      ) : null}
    </section>
  );
};
