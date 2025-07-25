import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useEffect } from "react";


type NavMenuProps = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

export default function NavMenu({ menuOpen, setMenuOpen }: NavMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen, setMenuOpen]);

    return (
        <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
                >
                  <Menu className="w-6 h-6  text-zinc-800 dark:text-white" />
                </button>

                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-zinc-800 border dark:border-zinc-700 rounded-lg shadow-lg z-10"
                  onMouseLeave={() => setMenuOpen(false)}>
                    <ul className="text-sm py-2">
                      <li>
                        <button
                          onClick={() => {
                            router.push("/rent/newRent");
                            setMenuOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                        >
                          📗 Criar aluguel
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            router.push("/rent/listRent");
                            setMenuOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                        >
                          👁️ Visualizar aluguéis
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            router.push("/soon");
                            setMenuOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                        >
                          📕 Cadastrar Livro
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            router.push("/soon");
                            setMenuOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                        >
                          ✏️ Editar Livro
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
    );
}