export default function Home({ lang = "en" }) {
  const validLang = lang === "zh" ? "zh" : "en";
const calculatorLink =
  validLang === "zh"
    ? "/zh/800m-calculator"
    : "/en/800m-calculator";

  return (
    <>
      <title>Sean Fontaine | Portfolio & Web Apps</title>
      <meta
        name="description"
        content="Sean Fontaine's personal website and web app portfolio. Explore calculators and projects for athletes, developers, and more."
      />
      <link rel="canonical" href="https://www.seanfontaine.dev/" />
      <div style={{ padding: "2rem" }}>
        <h1>Sean Fontaine</h1>
        <p>Welcome to my site! Check out my projects:</p>
        <ul>
          <li>
            <a href={calculatorLink}>800m Training & Race Calculator</a>
          </li>
        </ul>
      </div>
    </>
  );
}