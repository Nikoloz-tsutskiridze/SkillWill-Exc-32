import { SettingsProvider } from "./contexts/SettingsContext";
import "./styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <SettingsProvider>
      <html lang="en">
        <body>
          <header>
            <h1>My App</h1>
          </header>
          {children}
          <footer>© 2024 My App</footer>
        </body>
      </html>
    </SettingsProvider>
  );
}
