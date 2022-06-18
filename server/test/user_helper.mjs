import { api } from './helper.mjs'

const getAnUserToken = async () => {
  const blanquitoUser = {
    username: 'Blanquito',
    name: 'Blanco Saenz Penia',
    email: 'blanquito@gmail',
    password: 'ThisIsItsPassword'
  }

  await api
    .post('/api/users')
    .send(blanquitoUser)

  const loggedUser = await api
    .post('/api/users/login')
    .send({
      email: blanquitoUser.email,
      password: blanquitoUser.password
    })

  return loggedUser.body.token
}

export default getAnUserToken
