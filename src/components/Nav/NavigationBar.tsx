import { useEffect, useState } from "react";
import { NavData } from "../../utils/NavData";
import { useViewStore } from "../../store/viewStore";

interface HeaderProps {
  handleScroll: (item: React.ReactNode) => void;
}

function NavigationBar({ handleScroll }: HeaderProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleClickMenu = (submenu: string) => {
    handleScroll(submenu);
    setActiveMenu(submenu);
  };

  const { section } = useViewStore();

  useEffect(() => {
    if (section) {
      setActiveMenu(null);
    }

    // if (activeMenu) {
    //   setSection(null);
    // }
  }, [section]);

  return (
    <>
      <div className="pl-8 py-8">
        {NavData.map((menu, index) => {
          return (
            <div key={index} className="mb-4">
              <div
                className="font-extrabold"
                onClick={() => handleScroll(menu.title)}
              >
                {menu.title}
              </div>
              <ul className="list-disc">
                {menu.subMenu.map((submenu, index) => {
                  return (
                    <li
                      key={index}
                      className={`ml-4 text-sm  ${
                        section === submenu
                          ? "text-yellow-400 font-extrabold"
                          : "text-zinc-500"
                      } focus:text-yellow-300 `}
                      onClick={() => handleClickMenu(submenu)}
                    >
                      {submenu}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default NavigationBar;
