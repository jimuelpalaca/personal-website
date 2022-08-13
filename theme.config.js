const YEAR = new Date().getFullYear()
export default {
  footer: (
    <small style={{ display: "block", marginTop: "5rem" }}>
      <span className="footer-logo">&lt;jpa/&gt;</span>{" "}
      <a className="website-link" href="/">
        jimuelpala.ca
      </a>
      <br /> © Jimuel Palaca <time>{YEAR}</time>
      <a className="rss" href="/feed.xml">
        RSS
      </a>
      <style jsx>{`
        a.rss {
          float: right;
        }

        a.website-link {
          font-size: 1.25em;
        }

        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
  logo: <span className="footer-logo">&lt;jpa/&gt;</span>,
  darkMode: false,
}
