import React from "react";
import Link from "next/link";
// Icons
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { HiOutlineArrowsExpand } from "@react-icons/all-files/hi/HiOutlineArrowsExpand"
import { RiQuestionAnswerLine } from "@react-icons/all-files/ri/RiQuestionAnswerLine"
import { GiNetworkBars } from "@react-icons/all-files/gi/GiNetworkBars"
import { GiTvRemote } from "@react-icons/all-files/gi/GiTvRemote"

const MobileFooter = () => {
    return (
        <footer>
            <div className="fixed bottom-0 left-0 flex justify-center w-full gap-8 py-2 ml-1 text-center bg-zinc-50 dark:bg-zinc-900 dark:bg-black50 md:hidden">
                {/* Home */}
                <Link href="/" rel="noopener noreferrer">
                    <button className="hover:text-neutral-700 dark:hover:text-gray-50">
                        <FaHome className="ml-2" size={21} />
                        <p className="mt-1 text-xs text-center font-Poppins">Home</p>
                    </button>
                </Link>

                {/* Features */}
                <Link href="/features" rel="noopener noreferrer">
                    <button className="hover:text-neutral-700 dark:hover:text-gray-50">
                        <HiOutlineArrowsExpand className="ml-3" size={23} />
                        <p className="mt-1 text-xs text-center font-Poppins">Features</p>
                    </button>
                </Link>

                {/* About */}
                <Link href="/about" rel="noopener noreferrer">
                    <button className="hover:text-neutral-700 dark:hover:text-gray-50">
                        <RiQuestionAnswerLine className="ml-2" size={23} />
                        <p className="mt-1 text-xs text-center font-Poppins">About</p>
                    </button>
                </Link>



                {/* Company */}
                <Link href="/company" rel="noopener noreferrer">
                    <button className="hover:text-neutral-700 dark:hover:text-gray-50">
                        <GiTvRemote className="ml-5" size={22} />
                        <p className="mt-1 text-xs text-center font-Poppins">Company</p>
                    </button>
                </Link>

                {/* Careers */}
                <Link href="/careers" rel="noopener noreferrer">
                    <button className="hover:text-neutral-700 dark:hover:text-gray-50">
                        <GiNetworkBars className="ml-3" size={22} />
                        <p className="mt-1 text-xs text-center font-Poppins">Careers</p>
                    </button>
                </Link>

            </div>
        </footer>
    );
};

export default MobileFooter;
