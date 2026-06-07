import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'

type ButtonProps = {
  children: React.ReactNode
  variant?: ButtonVariant
  onClick?: () => void
  href?: string
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit'
  target?: '_blank' | '_self'
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-wine-500 text-white hover:bg-wine-700 shadow-sm',
  secondary: 'bg-gold-500 text-white hover:bg-gold-400 shadow-sm',
  outline: 'border-2 border-wine-500 text-wine-500 hover:bg-wine-50',
  ghost: 'text-wine-500 hover:bg-wine-50',
}

const base = 'inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'

export default function Button({
  children,
  variant = 'primary',
  onClick,
  href,
  className = '',
  disabled = false,
  type = 'button',
  target,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes} target={target}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}