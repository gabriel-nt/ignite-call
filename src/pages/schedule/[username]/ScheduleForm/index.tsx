import { useState } from 'react'

import { CalendarStep } from './CalendarStep'
import { ConfirmStep } from './ConfirmStep'

export function ScheduleForm() {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null)

  const handleClearSelectedDateTime = () => {
    setSelectedDateTime(null)
  }

  if (selectedDateTime) {
    return (
      <ConfirmStep
        schedulingDate={selectedDateTime}
        onSuccessConfirmation={handleClearSelectedDateTime}
        onCancelConfirmation={handleClearSelectedDateTime}
      />
    )
  }

  return <CalendarStep onSelectDateTime={setSelectedDateTime} />
}
