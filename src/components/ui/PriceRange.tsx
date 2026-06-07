type PriceRangeProps = {
  value: 1 | 2 | 3 | 4
  className?: string
}

export default function PriceRange({ value, className = '' }: PriceRangeProps) {
  return (
    <span className={`inline-flex gap-0.5 ${className}`}>
      {[1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className={`text-sm font-semibold ${i <= value ? 'text-gold-500' : 'text-stone-200'}`}
        >
          $
        </span>
      ))}
    </span>
  )
}
