import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export enum AUTH_STEP {
  AUTHENTICATE_WITH_EMAIL = 'AUTHENTICATE_WITH_EMAIL',
  PENDING_CODE = 'PENDING_CODE',
}

type Information = {
  phone: string
  email: string
  target: string
}

type State = {
  step: AUTH_STEP
}

const initialState: State = {
  step: AUTH_STEP.AUTHENTICATE_WITH_EMAIL,
}

type Action = {
  setStep: (step: AUTH_STEP) => void
}

export const useAuthStore = create<State & Action>()(
  devtools((set) => ({
    ...initialState,

    setStep: (step: AUTH_STEP) => {
      set({ step }, false, 'setStep')
    },
  })),
)
