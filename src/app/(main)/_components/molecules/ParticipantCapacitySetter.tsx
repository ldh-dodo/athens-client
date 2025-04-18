'use client';

import React, { ChangeEventHandler, useState } from 'react';
import { useCreateAgora } from '@/store/create';
import { useShallow } from 'zustand/react/shallow';
import { ParticipantCountAction } from '@/app/model/Agora';
import { AGORA_CREATE } from '@/constants/agora';
import ControlNumberInput from '../atoms/ControlNumberInput';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

function ParticipantCapacitySetter() {
  const [message, setMessage] = useState<string | null>('');
  const { capacity, setCapacity } = useCreateAgora(
    useShallow((state) => ({
      capacity: state.capacity,
      setCapacity: state.setCapacity,
    })),
  );

  const validateCapacity = (value: number, state?: ParticipantCountAction) => {
    if (state === INCREASE || value < AGORA_CREATE.MIN_PARTICIPANTS_CNT) {
      setMessage(AGORA_CREATE.MIN_PARTICIPANTS_CNT_MESSAGE);
      return;
    }
    if (state === DECREASE || value > AGORA_CREATE.MAX_PARTICIPANTS_CNT) {
      setMessage(AGORA_CREATE.MAX_PARTICIPANTS_CNT_MESSAGE);
      return;
    }

    setMessage(null);

    setCapacity(value);
  };

  const handleParticipants: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = parseInt(e.target.value, 10);
    validateCapacity(value);
  };

  const handleParticipantsBtn = (action: ParticipantCountAction) => {
    switch (action) {
      case DECREASE:
        validateCapacity(capacity - 1);
        break;
      case INCREASE:
        validateCapacity(capacity + 1);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex justify-center items-start flex-col">
      <div className="p-3 flex justify-between items-center">
        <ControlNumberInput
          label="찬성 / 반대"
          value={capacity}
          handleChange={handleParticipants}
          handleButtonClick={handleParticipantsBtn}
          increaseLabel="참여 인원 증가"
          decreaseLabel="참여 인원 감소"
          inputLabel="설정한 최대 참여 인원"
        />
      </div>
      <div>
        {message && (
          <div
            aria-live="polite"
            role="alert"
            className="text-xs text-red-600 p-5 pl-0 dark:text-dark-con-color"
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default React.memo(ParticipantCapacitySetter);
