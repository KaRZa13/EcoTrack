export interface Categories {
  id: number
  maxScore: number
  name: string
}

export interface Users {
  id: string
  firstname: string
  xp: number
  level: number
  nextLevel: number
  currentScore: number
  bestScore: number
  role: string
  company_code: string
}

export interface Company {
  id: string
  name: string
}

export interface Companies {
  id: string
  name: string
  currentScore: number
}

export interface History {
  historyDate: string

}