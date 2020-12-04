module.exports = {
  active: true,
  order:10000,
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
  }
}