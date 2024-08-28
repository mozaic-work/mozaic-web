import { getCookie, setCookie } from 'cookies-next'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export enum AUTH_STEP {
  AUTHENTICATE_WITH_EMAIL = 'AUTHENTICATE_WITH_EMAIL',
  PENDING_CODE = 'PENDING_CODE',
}

type State = {
  step: AUTH_STEP
  information: string | null
}

const initialState: State = {
  step: AUTH_STEP.AUTHENTICATE_WITH_EMAIL,
  information: (getCookie('auth_info') as string) || null,
}

type Action = {
  setStep: (step: AUTH_STEP) => void
  setInfo: (info: string) => void
}

export const useAuthStore = create<State & Action>()(
  devtools((set) => ({
    ...initialState,

    setStep: (step: AUTH_STEP) => {
      set({ step }, false, 'setStep')
    },
    setInfo: (info: string) => {
      setCookie('auth_info', JSON.stringify(info))
      set({ information: info }, false, 'setInfo')
    },
  })),
)
