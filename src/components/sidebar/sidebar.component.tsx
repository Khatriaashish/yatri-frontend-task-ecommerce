"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { BiUser } from "react-icons/bi";
import {
  MdLogout,
  MdShoppingCart,
  MdOutlineShoppingCartCheckout,
  MdOutlineHome,
  MdOutlineClose,
  MdOutlineSegment,
} from "react-icons/md";

const navItems = [
  { icon: <MdOutlineHome size={20} />, label: "Home", href: "/" },
  { icon: <MdShoppingCart size={20} />, label: "Cart", href: "/cart" },
  {
    icon: <MdOutlineShoppingCartCheckout size={20} />,
    label: "Checkout",
    href: "/checkout",
  },
];

export const Sidebar = () => {
  const [expanded, setExpanded] = useState(false); // for tablet toggle
  const [mobileOpen, setMobileOpen] = useState(false); // for mobile menu
  const [asideHovered, setAsideHovered] = useState(false); // for desktop hover
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();

  return (
    <>
      {/* Mobile hamburger button */}
      {!mobileOpen && (
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden fixed top-4 left-4 z-60 p-2 bg-gray-800 text-white rounded-lg"
        >
          <MdOutlineSegment size={22} />
        </button>
      )}

      {/* Sidebar (desktop + tablet) */}
      <aside
        className={`fixed top-0 left-0 h-screen transition-all duration-300 ease-in-out z-40 ${
          expanded || asideHovered ? "w-48" : "w-16"
        } hidden md:flex flex-col w-fit bg-black/20 backdrop-blur-md`}
        onMouseEnter={() => window.innerWidth >= 1024 && setAsideHovered(true)}
        onMouseLeave={() => window.innerWidth >= 1024 && setAsideHovered(false)}
      >
        {/* Expand button for tablets */}
        <div
          className={`hamburger flex ${
            expanded ? "justify-end" : "justify-center"
          } items-center mt-2`}
        >
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="lg:hidden p-2 m-2 rounded bg-gray-700"
          >
            {expanded ? (
              <MdOutlineClose size={18} />
            ) : (
              <MdOutlineSegment size={18} />
            )}
          </button>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 flex flex-col justify-between gap-2 my-4 w-fit">
          <div className="top flex flex-col gap-2">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className={`group flex items-center  gap-3 px-3 py-2 text-gray-500 hover:text-white rounded-md ${
                  pathname === item.href ? "text-white" : ""
                }`}
              >
                <span className="pl-2">{item.icon}</span>
                <span
                  className={`transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap  ${
                    expanded || asideHovered
                      ? "max-w-full opacity-100 ml-2 mr-10"
                      : "max-w-0 opacity-0 ml-0"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            ))}
          </div>
          <div className="bottom">
            {session?.user?.name && (
              <div
                className={`group flex items-center  gap-3 px-3 py-2  ${
                  pathname === "/login" ? "text-white" : "text-gray-500"
                } rounded-md`}
              >
                <span className="pl-2">
                  {session?.user?.image ? (
                    <span className="block w-6 h-6 rounded-full overflow-hidden border-2 border-gray-400">
                      <Image
                        src={session.user.image}
                        alt={session.user.name || "User"}
                        width={24}
                        height={24}
                        className="w-full h-full object-cover rounded-full"
                        priority
                      />
                    </span>
                  ) : (
                    <BiUser size={20} />
                  )}
                </span>
                <span
                  className={`transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap ${
                    expanded || asideHovered
                      ? "max-w-full opacity-100 ml-2 mr-10"
                      : "max-w-0 opacity-0 ml-0"
                  }`}
                >
                  {session?.user?.name}
                </span>
              </div>
            )}

            <div
              className={`group flex items-center cursor-pointer  gap-3 px-3 py-2  ${
                pathname === "/login" ? "text-white" : "text-gray-500"
              } hover:text-white rounded-md `}
              onClick={() => {
                if (status === "authenticated") {
                  signOut({ callbackUrl: "/" });
                } else router.push("/login");
              }}
            >
              <span className="pl-2">
                <MdLogout size={20} />
              </span>
              <span
                className={`transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap ${
                  expanded || asideHovered
                    ? "max-w-full opacity-100 ml-2 mr-10"
                    : "max-w-0 opacity-0 ml-0"
                }`}
              >
                {status === "authenticated" ? "Logout" : "Login"}
              </span>
            </div>
          </div>
        </nav>
      </aside>

      {/* Mobile fullscreen sidebar */}
      {mobileOpen && (
        <div
          className="fixed inset-0 backdrop-blur-xl bg-opacity-60 z-50 flex"
          onClick={() => setMobileOpen(false)}
        >
          <aside className="w-64 bg-gray-900 h-full text-white p-4 flex flex-col">
            <button
              onClick={() => setMobileOpen(false)}
              className="self-end p-2 mb-4 bg-gray-700 rounded-lg"
            >
              <MdOutlineClose size={22} />
            </button>

            <nav className="flex-1 flex flex-col justify-between gap-4">
              <div className="top flex flex-col gap-2">
                {navItems.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 text-gray-500 rounded-md ${
                      pathname === item.href ? "text-white" : ""
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
              <div className="bottom pb-4">
                {session?.user?.name && (
                  <div
                    className={`flex items-center ${
                      pathname === "/login" ? "text-white" : "text-gray-500"
                    } gap-3 px-3 py-2 rounded-md`}
                  >
                    {session?.user?.image ? (
                      <span className="block w-6 h-6 rounded-full overflow-hidden border-2 border-gray-400">
                        <Image
                          src={session.user.image}
                          alt={session.user.name || "User"}
                          width={24}
                          height={24}
                          className="w-full h-full object-cover rounded-full"
                          priority
                        />
                      </span>
                    ) : (
                      <BiUser size={20} />
                    )}

                    <span>{session?.user?.name}</span>
                  </div>
                )}
                <div
                  onClick={() => {
                    if (status !== "authenticated") {
                      router.push("/login");
                    } else signOut({ callbackUrl: "/" });
                    setMobileOpen(false);
                  }}
                  className={`flex items-center ${
                    pathname === "/login" ? "text-white" : "text-gray-500"
                  } gap-3 px-3 py-2 rounded-md`}
                >
                  <MdLogout size={20} />
                  <span>{status === "authenticated" ? "Logout" : "Login"}</span>
                </div>
              </div>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
};
