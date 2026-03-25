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
    gap: 3rem;                /* ← 增大间距：原来是 2rem，现在 3rem 或更大 */
    margin: 1.2rem 0 2rem 0;  /* ← 控制上下位置：上边距 1.2rem（更靠上），下边距 2rem */
    align-items: center;
    font-weight: 500;
    font-size: 1.1em;         /* 可选：稍微放大字体 */
  }
  .nav-container a {
    text-decoration: none;
    color: inherit;
    transition: opacity 0.2s;
  }
  .nav-container a:hover {
    opacity: 0.8;             /* 可选：hover 时变暗 */
  }
`