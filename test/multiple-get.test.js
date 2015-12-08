var fs = require('fs')
var png = require('../')
var Through = require('stream').PassThrough
var test = require('tape')

var file = new Buffer('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX/TQBcNTh/AAAAAXRSTlPM0jRW/QAAAApJREFUeJxjYgAAAAYAAzY3fKgAAAAASUVORK5CYII', 'base64')

var start = new Through()

test('multiple-get', function(t) {
  t.plan(6)
  start
    .pipe(png.set('the', 'cat'))
    .pipe(png.set('sat', 'on'))
    .pipe(png.set('a', 'mat'))
    .pipe(png.get(function(key, value) {
      t.ok(key, "valid key returned")
      t.ok(value, "valid value returned")
      console.log(key, value)
  }))
  
  start.write(file)
})

