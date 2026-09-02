// import { useState } from "react";
// import { FaWhatsapp } from "react-icons/fa";
// import { IoCall } from "react-icons/io5";
// import { MdOutlineEmail } from "react-icons/md";
// import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

// import { brand } from "../data/siteData";
// import ContactPopup from "./ContactPopup";

// export default function FloatingContact() {
//   const [showMenu, setShowMenu] = useState(false);
//   const [open, setOpen] = useState(false);

//   const phone = brand.phone.replace(/\D/g, "");

//   return (
//     <>
//       <ContactPopup
//         open={open}
//         onClose={() => setOpen(false)}
//       />

//       <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">

//         {/* Menu */}
//         <div
//           className={`mb-4 overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 ${
//             showMenu
//               ? "max-h-72 opacity-100"
//               : "max-h-0 opacity-0 pointer-events-none"
//           }`}
//         >
//           <a
//             href={`https://wa.me/${phone}`}
//             target="_blank"
//             rel="noreferrer"
//             className="flex w-56 items-center gap-4 border-b px-5 py-4 hover:bg-gray-50"
//           >
//             <FaWhatsapp className="text-2xl text-[#25D366]" />
//             <span className="font-medium">WhatsApp</span>
//           </a>

//           <a
//             href={`tel:${brand.phone}`}
//             className="flex w-56 items-center gap-4 border-b px-5 py-4 hover:bg-gray-50"
//           >
//             <IoCall className="text-2xl text-[#C39A4A]" />
//             <span className="font-medium">Call Now</span>
//           </a>

//           <button
//             onClick={() => {
//               setShowMenu(false);
//               setOpen(true);
//             }}
//             className="flex w-full items-center gap-4 px-5 py-4 hover:bg-gray-50"
//           >
//             <MdOutlineEmail className="text-2xl text-slate-700" />
//             <span className="font-medium">Enquire Now</span>
//           </button>
//         </div>

//         {/* Main Button */}
//         <button
//           onClick={() => setShowMenu(!showMenu)}
//           className="flex items-center gap-3 rounded-full bg-[#b08a43] px-6 py-4 text-white shadow-2xl transition hover:scale-105"
//         >
//           <HiOutlineChatBubbleLeftRight className="text-2xl" />
//           <span className="font-semibold">
//             {showMenu ? "Close" : "Contact Us"}
//           </span>
//         </button>

//       </div>
//     </>
//   );
// }


import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

import { brand } from "../data/siteData";
import ContactPopup from "./ContactPopup";

export default function FloatingContact() {
  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const phone = brand.phone.replace(/\D/g, "");

  useEffect(() => {
    const aboutSection = document.getElementById("about");

    if (!aboutSection) return;

    const handleScroll = () => {
      const aboutTop = aboutSection.getBoundingClientRect().top;

      // Show once About Us reaches the top portion of the viewport
      if (aboutTop <= window.innerHeight * 0.85) {
        setShowContact(true);
      }

      // Hide again when user returns to the Hero/top of the page
      if (window.scrollY < 100) {
        setShowContact(false);
        setShowMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Check initial position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!showContact) return null;

  return (
    <>
      <ContactPopup
        open={open}
        onClose={() => setOpen(false)}
      />

      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">

        {/* Menu */}
        <div
          className={`mb-4 overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 ${
            showMenu
              ? "max-h-72 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            rel="noreferrer"
            className="flex w-56 items-center gap-4 border-b px-5 py-4 hover:bg-gray-50"
          >
            <FaWhatsapp className="text-2xl text-[#25D366]" />
            <span className="font-medium">WhatsApp</span>
          </a>

          {/* Call */}
          <a
            href={`tel:${brand.phone}`}
            className="flex w-56 items-center gap-4 border-b px-5 py-4 hover:bg-gray-50"
          >
            <IoCall className="text-2xl text-[#C39A4A]" />
            <span className="font-medium">Call Now</span>
          </a>

          {/* Enquire */}
          <button
            onClick={() => {
              setShowMenu(false);
              setOpen(true);
            }}
            className="flex w-full items-center gap-4 px-5 py-4 hover:bg-gray-50"
          >
            <MdOutlineEmail className="text-2xl text-slate-700" />
            <span className="font-medium">Enquire Now</span>
          </button>
        </div>

        {/* Main Button */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="flex items-center gap-3 rounded-full bg-[#b08a43] px-6 py-4 text-white shadow-2xl transition hover:scale-105"
        >
          <HiOutlineChatBubbleLeftRight className="text-2xl" />

          <span className="font-semibold">
            {showMenu ? "Close" : "Contact Us"}
          </span>
        </button>

      </div>
    </>
  );
}