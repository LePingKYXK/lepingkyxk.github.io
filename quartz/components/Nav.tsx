// quartz/components/Nav.tsx
import { QuartzComponent, QuartzComponentConstructor } from "./types"

interface NavOptions {
  html: string
}

export const Nav: QuartzComponentConstructor<NavOptions> = ({ html }: NavOptions) => {
  return () => <div dangerouslySetInnerHTML={{ __html: html }} />
}

Nav.css = `
  .nav-container {
    display: flex;
    gap: 2rem;
    margin: 0;
    align-items: center;
    font-weight: 500;
  }
  .nav-container a {
    text-decoration: none;
    color: inherit;
  }
`