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
  currentScore: string
}

export interface Companies {
  id: string
  name: string
  currentScore: number
}

export interface History {
  historyDate: string

}

export interface Tips {
  id: number
  content: string
  categoryMinScore: number
}

export interface Questions {
  id: number
  content: string
  category: number
}

export interface Answers {
  id: number
  content: string
  idquestion: number
  value: number
}