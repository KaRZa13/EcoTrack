export interface Categories {
  public: {
    Tables: {
      'categories': {
        Row: {
          id: number
          maxScore: number
          name: string
        }
      }
    }
  }
}

export interface Users {
  public: {
    Tables: {
      'user_profiles': {
        Row: {
          id: string
          firstname: string
          xp: number
          level: number
          nextLevel: number
          currentScore: number
          bestScore: number
          role: string
        }
      }
    }
  }
}

export interface Company {
  public: {
    Tables: {
      'company': {
        Row: {
          id: string
          name: string
        }
      }
    }
  }
}