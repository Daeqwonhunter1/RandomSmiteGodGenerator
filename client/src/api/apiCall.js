import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:3000"
})

export const getGods = async () => {
  const response = await api.get('/godList')
  return response.data
}

export const getRandomGod = async (godid) => {
  const response = await api.get(`/godList/${godid}`)
  return response.data
}

export const getItems = async () => {
  const response = await api.get('/items')
  return response.data.itemlist
}

export const getRandomItems = async (itemId) => {
  const response = await api.get(`/items/${itemId}`)
  return response.data.itemlist
}



////////////////////


export const getRandomMagicalItems = async () => {
  const response = await api.get(`/items/magical`)
  console.log(response.data)
  return response.data
}

export const getRandomPhysicalItems = async () => {
  const response = await api.get(`/items/physical`)
  return response.data.itemlist
}

export const getRatItem = async () => {
  const response = await api.get('/items/specialphysical')
  const response2 = await api.get(`/items/${5}`)
  const acorn = response2.data.itemlist
  const responses = { ...response.data.itemlist, acorn }
  console.log(responses)
  return responses
}

getRatItem()