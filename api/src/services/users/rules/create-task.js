import { db } from 'src/lib/db'
module.exports = {
  rule: {
  name: "create task",
  active: true,
  order: 100,
  command: (input)=>{
      try {
          if (input) {
            console.log('rule 2 input', input)
            let due = new Date();
            due.setDate(due.getDate() + 7)
            let summary = "Onboard " + input.name + " from rules"
            let createTask = db.task.create({
              data: {
                summary: summary,
                due: due
              }
            }).then(()=>{
              return input
            })
            return createTask;
          }
      } catch (e) {
          console.log('test.js error', e);
      }
      return input;
  }
  }
}