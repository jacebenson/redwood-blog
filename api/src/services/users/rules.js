/*
import { rule as createTask } from './rules/create-task'
import { rule as updatejacedcom } from './rules/updatejacedcom'
import { rule as updatejacedcomfalse } from './rules/updatejacedcomfalse'
import { rule as updatejacedcomcopy2 } from './rules/updatejacedcom copy 2'
import { rule as updatejacedcomcopy3 } from './rules/updatejacedcom copy 3'
import { rule as updatejacedcomcopy4 } from './rules/updatejacedcom copy 4'
import { rule as updatejacedcomcopy5 } from './rules/updatejacedcom copy 5'
import { rule as updatejacedcomcopy6 } from './rules/updatejacedcom copy 6'
import { rule as updatejacedcomcopy7 } from './rules/updatejacedcom copy 7'
import { rule as updatejacedcomcopy8 } from './rules/updatejacedcom copy 8'
import { rule as updatejacedcomcopy9 } from './rules/updatejacedcom copy 9'
import { rule as updatejacedcomcopy10 } from './rules/updatejacedcom copy 10'
import { rule as updatejacedcomcopy11 } from './rules/updatejacedcom copy 11'

let rulesList = [];
rulesList.push(createTask)
rulesList.push(updatejacedcom)
rulesList.push(updatejacedcomcopy2)
rulesList.push(updatejacedcomcopy3)
rulesList.push(updatejacedcomcopy4)
rulesList.push(updatejacedcomcopy5)
rulesList.push(updatejacedcomcopy6)
rulesList.push(updatejacedcomcopy7)
rulesList.push(updatejacedcomcopy8)
rulesList.push(updatejacedcomcopy9)
rulesList.push(updatejacedcomcopy10)
rulesList.push(updatejacedcomcopy11)
rulesList.push(updatejacedcomfalse)
*/

let path = require('path')
let basepath = './api/src/services/users/rules/'
let files = [
  "updatejacedcom.js",
  "create-task"
]
let rulesList = [];
files.forEach(function(file){
  let rule = require(path.join(basepath, file));
  console.log("rule", rule.rule);
  rulesList.push(rule.rule);
})


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