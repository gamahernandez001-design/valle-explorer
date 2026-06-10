const dayOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
const dayLabels: Record<string, string> = {
  monday: 'Monday',
  tuesday: 'Tuesday',
  wednesday: 'Wednesday',
  thursday: 'Thursday',
  friday: 'Friday',
  saturday: 'Saturday',
  sunday: 'Sunday',
}

type HoursTableProps = {
  hours: Record<string, string>
}

export default function HoursTable({ hours }: HoursTableProps) {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase()

  return (
    <div className="flex flex-col divide-y divide-stone-100">
      {dayOrder.map((day) => {
        const isToday = day === today
        const isClosed = hours[day]?.toLowerCase() === 'closed'

        return (
          <div
            key={day}
            className={`flex justify-between items-center py-2.5 ${
              isToday ? 'font-semibold' : ''
            }`}
          >
            <span className={`text-sm ${isToday ? 'text-wine-500' : 'text-stone-600'}`}>
              {isToday ? `${dayLabels[day]} (today)` : dayLabels[day]}
            </span>
            <span className={`text-sm ${
              isClosed
                ? 'text-stone-400'
                : isToday
                ? 'text-wine-500'
                : 'text-stone-800'
            }`}>
              {hours[day] || 'Hours not available'}
            </span>
          </div>
        )
      })}
    </div>
  )
}