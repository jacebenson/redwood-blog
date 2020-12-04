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
  let now = (()=>{
    return new Date().toISOString()
  })()
  console.log('createUser input', input)
  let beforeRulesFulfilled = ()=>{
    rules.forEach((rule) => {
      if(rule.active && rule.order){
    console.log(now, rule.order, rule.name, 'begin');
    let previous = JSON.stringify(input);
    previous = JSON.parse(previous);

    let current = rule.command(input);

    //current = JSON.parse(JSON.stringify(current));
    if (previous !== current) {
      for (var prop in current) {
        if (previous[prop] != current[prop]) {
          console.log(now, prop, previous[prop] + '=>' + current[prop]);
        }
      }
    } else {
      console.log(now, rule.name, 'else');
    }
    if (previous === current) {
      console.log(now, rule.name, 'no changes to current');
    }

    console.log(now, rule.order, rule.name, 'end');
  } else {
    console.log(now, rule.order, rule.name, 'skipped');
  }
  })
  console.log(now, 'after rules applied', input)
  return input
}
let beforeRulesRejected = (error)=>{
  console.log(now, 'beforeRulesRejected', error)
}
  /*let insertUser = new Promise(beforeRulesFulfilled,beforeRulesRejected)
  .then(()=>{
    console.log(now, 'in then')
  }).catch((reason)=>{
    console.log(now, 'reason',reason)
  }).finally((info)=>{
    console.log(now, "all done", info)
    return db.user.create({
      data: input,
    })
  })
*/
//input =
beforeRulesFulfilled()
  return db.user.create({
    data: input,
  })
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
