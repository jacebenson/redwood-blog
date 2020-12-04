import { db } from 'src/lib/db'

export const sources = () => {
  return db.source.findMany()
}

export const source = ({ id }) => {
  return db.source.findOne({
    where: { id },
  })
}

export const createSource = ({ input }) => {
  return db.source.create({
    data: input,
  })
}

export const updateSource = ({ id, input }) => {
  return db.source.update({
    data: input,
    where: { id },
  })
}

export const deleteSource = ({ id }) => {
  return db.source.delete({
    where: { id },
  })
}
