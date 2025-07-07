import { Menu } from "lucide-react";
import router from "next/router";


type NavMenuProps = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

export default function NavMenu({ menuOpen, setMenuOpen }: NavMenuProps) {
    return (
        <div className="relative">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
                >
                  <Menu className="w-6 h-6 text-zinc-800 dark:text-white" />
                </button>

                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-zinc-800 border dark:border-zinc-700 rounded-lg shadow-lg z-10">
                    <ul className="text-sm py-2">
                      <li>
                        <button
                          onClick={() => {
                            router.push("/rent/create");
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
                            router.push("/rent/view");
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
                            router.push("/rent/update");
                            setMenuOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                        >
                          ✏️ Atualizar aluguel
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
    );
}