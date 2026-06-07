type BadgeVariant = 'category' | 'tag'

type BadgeProps = {
  label: string
  variant?: BadgeVariant
  className?: string
}

const variants: Record<BadgeVariant, string> = {
  category: 'bg-wine-50 text-wine-500 border border-wine-100',
  tag: 'bg-stone-100 text-stone-800 border border-stone-200',
}

export default function Badge({ label, variant = 'tag', className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variants[variant]} ${className}`}>
      {label}
    </span>
  )
}
