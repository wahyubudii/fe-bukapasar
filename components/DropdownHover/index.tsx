import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function DropdownHover({ children, buttonToogle }: any) {
  const user = useSelector((state: any) => state.auth.user);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left z-10">
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {buttonToogle ? (
          <div className="py-2.5">{buttonToogle}</div>
        ) : (
          <p className="font-medium hover:bg-gray-800 px-6 py-2.5 rounded capitalize cursor-pointer">
            Hallo, {user ? user.firstname : "User"}
          </p>
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
          className="absolute right-0 bg-transparent"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="bg-white shadow-2xl mt-3">{children}</div>
        </div>
      </Transition>
    </div>
  );
}
