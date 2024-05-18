import { Customers, Dashboard, Logo, Logout, MenuItems, MyStuffs, Orders, Reports, RestaurantPlanner, Settings, Transactions } from "@/components/Icon";

export default function Left() {
    return(
        <div className="w-[20%] h-screen flex flex-col justify-between py-6  bg-white">
        <div className="flex flex-col gap-8">
        <div className="">
          <Logo/>
        </div>
        <div className="flex flex-col justify-start items-stretch gap-3">
          <div className="flex justify-start items-center gap-2 px-4 py-2 rounded-md cursor-pointer active">
            <span className="w-[14px] h-[14px]">
              <Dashboard/>
            </span>
            Dashboard
          </div>
          <div className="flex justify-start items-center gap-2 px-4 py-2 rounded-md cursor-pointer">
            <span className="w-[14px] h-[14px]">
              <Customers/>
            </span>
            Customers
          </div>
          <div  className="flex justify-start items-center gap-2 px-4 py-2 rounded-md cursor-pointer">
            <span className="w-[14px] h-[14px]">
              <MenuItems/>
            </span>
            Menu Items        
          </div>
          <div  className="flex justify-start items-center gap-2 px-4 py-2 rounded-md cursor-pointer">
            <span className="w-[14px] h-[14px]">
              <Orders/>
            </span>
            Orders
          </div>
          <div  className="flex justify-start items-center gap-2 px-4 py-2 rounded-md cursor-pointer">
            <span className="w-[14px] h-[14px]">
              <Reports/>
            </span>
            Reports
          </div>
          <div  className="flex justify-start items-center gap-2 px-4 py-2 rounded-md cursor-pointer">
            <span className="w-[14px] h-[14px]">
              <Transactions/>
            </span>
            Transactions
          </div>
          <div  className="flex justify-start items-center gap-2 px-4 py-2 rounded-md cursor-pointer">
            <span className="w-[14px] h-[14px]">
              <MyStuffs/>
            </span>
            My Stuffs       
          </div>
          <div className="flex justify-start items-center gap-2 px-4 py-2 rounded-md cursor-pointer">
            <span className="w-[14px] h-[14px]">
              <RestaurantPlanner/>
            </span>
            Restaurant Planner  
          </div>
        </div>
        </div>
        <div className="">
            <div className="flex justify-start items-center gap-2 cursor-pointer px-4 py-6">
                <span className="w-5 h-5">
                    <Settings/>
                </span>
                Settings
            </div>
            <div className="flex justify-start items-center gap-2 cursor-pointer px-4 py-6">
                <span className="w-5 h-5">
                    <Logout/>
                </span>
                Logout
            </div>
        </div>
      </div>
    )
}