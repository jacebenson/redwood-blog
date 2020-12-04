import { db } from 'src/lib/db'
import { rules } from './rules'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findOne({
    where: { id },
  })
}

export const createUser = ({ input }) => {
  console.log('createUser input', input)
  let beforeRulesFulfilled = ()=>{
    rules.forEach((rule) => {
    console.log(rule.order, rule.name, 'begin');
    let previous = JSON.stringify(input);
    previous = JSON.parse(previous);
    let current = rule.command(input);
    //current = JSON.parse(JSON.stringify(current));
    if (previous !== current) {
      for (var prop in current) {
        if (previous[prop] != current[prop]) {
          console.log(prop, previous[prop] + '=>' + current[prop]);
        }
      }
    } else {
      console.log(rule.name, 'else');
    }
    if (previous === current) {
      console.log(rule.name, 'no changes to current');
    }

    console.log(rule.order, rule.name, 'end');
  })
  console.log('after rules applied', input)
  return input
}
let beforeRulesRejected = (error)=>{
  console.log('beforeRulesRejected', error)
}
  let insertUser = new Promise(beforeRulesFulfilled,beforeRulesRejected)
  .then(()=>{
  }).catch((reason)=>{
    console.log('reason',reason)
  }).finally((info)=>{
    console.log("all done", info)
    return db.user.create({
      data: input,
    })
  })

  return db.user.create({
    data: input,
  })
  let due = new Date();
  due.setDate(due.getDate() + 7)
  let output = db.task.create({
    data: {
      summary: "Onboard" + input.name,
      due: due
    }
  }).then(() => {
    return db.user.create({
      data: input,
    })
  })
  console.log(output)
  return output

}

export const updateUser = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}
