import { NavData } from "../../utils/NavData";
import { useViewStore } from "../../store/viewStore";
import { useEffect, useState } from "react";

interface HeaderProps {
  handleScroll: (item: React.ReactNode) => void;
}

function NavigationBar({ handleScroll }: HeaderProps) {
  const [active, setActive] = useState<string | null>(null);
  const { section, setSection } = useViewStore();

  const handleClickMenu = (submenu: string) => {
    setSection(null);
    setActive(submenu);
    handleScroll(submenu);
  };

  useEffect(() => {
    if (section) {
      setActive(null);
    }
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
                      className={`ml-4 text-sm ${
                        active && active === submenu
                          ? "text-yellow-300"
                          : section === submenu
                          ? "text-yellow-300 font-bold"
                          : "text-zinc-500"
                      }`}
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
