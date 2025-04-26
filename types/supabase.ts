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

export interface Company {
  public: {
    Tables: {
      'company': {
        Row: {
          id: number
          name: string
        }
      }
    }
  }
}