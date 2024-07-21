import { Logo } from "../assets/Logo"
import { SearchIcon } from "../assets/SearchIcon"


export const Navbar = () => {


    return (
        <div className="flex justify-center max-w-[1216px] mx-auto gap-[10px]  py-[32px] items-center">
            <div className="flex flex-start gap=[118px]">
                <Logo />
                <div className="flex items-center gap-[21px]">
                <div className="flex w-[667px] justify-center items-center gap-[40px]">
                    <p className="flex items-center gap-[4px]">Home</p>
                    <p className="flex items-center gap-[4px]">Blog</p>
                    <p className="flex items-center gap-[4px]">Contact</p>
                </div>
                <div className="flex items-center gap-10 bg-gray-100 rounded px-2">
                    <input className="flex w-[166px] p-2 pl-4 items-center gap-3 bg-gray-100" placeholder="Search" />
                    <SearchIcon />
                </div>
                </div>
            </div>
        </div>
    )
}