import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import uuidv4 from 'uuid/v4'

const db = low(new FileSync(__dirname + '/users.json'))
db.defaults({responses: []}).write()

export default function () {
  const collection = function () {
    return db.get('responses')
  }
  return {
    find: function (condition) {
      return collection().find({ id: condition.id }).value()
    },
    insert: function (data) {
      collection()
        .push(data)
        .last()
        .assign({ id: uuidv4() })
        .write()
      return this.find(data)
    }
  }
}
