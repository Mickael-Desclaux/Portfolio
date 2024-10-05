import { createContext, useState } from "react";

interface DarkModeContextType {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextType>({
    darkMode: false,
    toggleDarkMode: () => {}
});

export default function DarkModeProvider({ children }: { children: React.ReactNode }) {

    const [darkMode, setDarkMode] = useState(false)

    function toggleDarkMode(): void {
        setDarkMode(!darkMode);
    }

    return (
        <DarkModeContext.Provider
            value={{
                darkMode,
                toggleDarkMode
            }}
        >
            {children}
        </DarkModeContext.Provider>
    )
}