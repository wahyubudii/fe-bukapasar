import { Transition } from "@headlessui/react";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function DropdownHover({ children, buttonToogle }: any) {
  const user = useSelector((state: any) => state.auth.user);
  const [isOpen, setIsOpen] = useState(false);

  // NEXT AUTH
  const { data: session } = useSession();

  return (
    <div className="relative inline-block text-left z-50">
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {buttonToogle ? (
          <div className="py-2.5">{buttonToogle}</div>
        ) : (
          <div className="flex items-center justify-center px-5 py-2.5 hover:bg-gray-200 rounded cursor-pointer space-x-4">
            <div
              className={`w-7 h-7 rounded-full flex justify-center items-center text-white text-sm font-bold capitalize bg-blue-700`}
            >
              {user
                ? user?.firstname[0]
                : session?.user?.name
                ? session?.user?.name[0]
                : ""}
            </div>
            <p className="font-bold text-gray-700 capitalize text-lg">
              {user ? user?.firstname : session?.user?.name}
            </p>
          </div>
        )}
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div
          className="absolute right-0 shadow-xl"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="bg-white shadow-2xl mt-3">{children}</div>
        </div>
      </Transition>
    </div>
  );
}
