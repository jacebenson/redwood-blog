const fs = require('fs')
const path = require('path')
const rulesDir = path.resolve("src/services/users/rules")
let rulesList = [];

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
module.exports = {
  rules: rulesList
}