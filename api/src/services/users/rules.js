
import { rule as createTask } from './rules/create-task'
import { rule as updatejacedcom } from './rules/updatejacedcom'
import { rule as updatejacedcomfalse } from './rules/updatejacedcomfalse'


let rulesList = [];
rulesList.push(createTask)
rulesList.push(updatejacedcom)
rulesList.push(updatejacedcomfalse)

rulesList.sort((a,b)=>a.order-b.order);

//const fs = require('fs')
//const path = require('path')
//const rulesDir = path.resolve("src/services/users/rules")
/*let rulesList = [];
try{
fs.readdir(rulesDir, (err, files) => {
  if (err) { console.log("readdir error", err) }
  console.log("readdir files", files)
  files.forEach((file)=>{
    try {
      let rulePath = path.resolve(rulesDir+"/"+file)
      let rule = require(rulePath)
      if(rule.active && rule.order>0){
        rulesList.push({
          location: rulePath,
          name: rule.name || file,
          command: rule.command,
          order: rule.order,
          active: rule.active
        })
        rulesList.sort((a,b)=>a.order-b.order);
      } else {
        console.log(file, "skipped check active and order")
      }
      //console.log("added command", rule.command.toString())

    } catch (e) {
      console.error('readdir error from catch', e)
    }
  })
})
}catch(e){
  console.log("Error loading rules", e)
}
*/
module.exports = {
  rules: rulesList
}