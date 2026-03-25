// quartz/components/TopNav.tsx
import { QuartzComponent, QuartzComponentConstructor } from "./types"

const TopNav: QuartzComponent = () => {
  return (
    <nav className="top-nav">
      <a href="/">Home</a>
      <a href="/tags/blog">Blogs</a>
      <a href="/publications">Publications</a>
      <a href="/links">Links</a>
    </nav>
  )
}

TopNav.css = `
  .top-nav {
    position: sticky;
    top: 0;
    background: var(--light);
    padding: 0.8rem 0;
    border-bottom: 1px solid var(--light-gray);
    z-index: 100;
    margin-bottom: 2rem;
  }
  .top-nav {
    display: flex;
    justify-content: center;
    gap: 4rem;
    font-weight: 500;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  .top-nav a {
    text-decoration: none;
    color: var(--gray);
  }
  body.darkmode .top-nav {
    background: var(--dark);
    border-color: var(--dark-gray);
  }
  body.darkmode .top-nav a {
    color: var(--light-gray);
  }
`

export default (() => TopNav) satisfies QuartzComponentConstructor