module.exports = {
  rule: {
    name: "jacedwasherefalse",
  active: false,
  command: function (input) {
      try {
          if (input.email==="jace@d.com") {
            input.email='jaceWasHere@d.com';
             //current.date = new Date()
          }

      } catch (e) {
          console.log('test.js error', e);
      }
      return input;
  },
  order: 10
}
}