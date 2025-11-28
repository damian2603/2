import { Hammer } from "lucide-react"

interface LogoProps {
  className?: string
  textClassName?: string
  iconWrapperClassName?: string
}

export function Logo({
  className = "flex items-center gap-2 bg-white/80",
  textClassName = "text-xl font-bold text-black",
  iconWrapperClassName = "flex h-10 w-10 items-center justify-center rounded-lg bg-black",
}: LogoProps) {
  return (
    <div className={className}>
      <div className={iconWrapperClassName}>
        <Hammer className="h-6 w-6 text-white" />
      </div>
      <span className={textClassName}>RemontPro</span>
    </div>
  )
}
