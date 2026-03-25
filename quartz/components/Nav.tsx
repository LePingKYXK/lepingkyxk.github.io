// quartz/components/Nav.tsx
import { QuartzComponent, QuartzComponentConstructor } from "./types"

interface NavOptions {
  html: string
}

const Nav: QuartzComponentConstructor<NavOptions> = (opts?: NavOptions) => {
  const { html = "" } = opts || {}
  const NavComponent = () => (
    <div
      style={{
        display: "flex",
        gap: "8rem",           // ← 直接用 inline style
        margin: "0.8rem 0 2rem 0",
        alignItems: "center",
        fontWeight: 500,
        fontSize: "1.1em",
      }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
  return NavComponent
}

// 不依赖 .css 字符串，避免注入失败
export default Nav