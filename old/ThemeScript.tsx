export default function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (() => {
            try {
              const saved = localStorage.getItem("theme");
              const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
              const theme = saved === "light" || saved === "dark" ? saved : (prefersDark ? "dark" : "light");
              if (theme === "dark") document.documentElement.classList.add("dark");
              else document.documentElement.classList.remove("dark");
              // Ensure inline background matches chosen theme even before CSS loads
              document.documentElement.style.backgroundColor = theme === "dark" ? "#000000" : "#ffffff";
            } catch (_) {
              // If storage APIs are blocked, keep whatever class is authored in HTML
            }
          })();
        `,
      }}
    />
  );
}
