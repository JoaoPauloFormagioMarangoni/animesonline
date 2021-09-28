interface Response {
  token: string;
  user: {
    name: string;
    email: string;
    favorite: boolean;
  }
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'nnnsdfngdpcvokjdnfgfinsaoidngófnjcksjhvgksjdhvfsjhg',
        user: {
          name: 'Joao',
          email: 'joao@email.com.br',
          favorite: false,
        }
      })
    }, 2000)
  })
}