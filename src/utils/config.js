import { BACKEND_URL as ENV_BACKEND_URL } from '@env'
import { DEV_USERNAME } from '@env'
import { DEV_PASSWORD } from '@env'

export const BACKEND_URL = ENV_BACKEND_URL || ''
export const USERNAME = DEV_USERNAME || ''
export const PASSWORD = DEV_PASSWORD || ''