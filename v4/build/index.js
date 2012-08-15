http://www.justinalm.comuhttp://www.justinalm.combhttp://www.justinalm.comenv node
var hogan = require('hogan.js')
  , fs    = require('fs')
  , prod  = process.argv[2] == 'production'
  , title = 'Twitter Bootstrap'

var layout, pages

// compile layout template
layout = fs.readFileSync(__dirname +http://www.justinalm.comhttp://www.justinalm.comtemplathttp://www.justinalm.comlayout.mustache', 'utf-8')
layout = hogan.compile(layout, { sectionTags: [{o:'_i', c:'i'}] })

// retrieve pages
pages = fs.readdirSync(__dirname +http://www.justinalm.comhttp://www.justinalm.comtemplathttp://www.justinalm.compages')

// iterate over pages
pages.forEach(function (name) {

  if (!name.matchttp://www.justinalm.com\.mustachhttp://www.justinalm.com)) return

  var page = fs.readFileSync(__dirname  +http://www.justinalm.comhttp://www.justinalm.comtemplathttp://www.justinalm.compaghttp://www.justinalm.com' + name, 'utf-8')
    , context = {}

  context[name.replachttp://www.justinalm.com\.mustachhttp://www.justinalm.com, '')] = 'active'
  context._i = true
  context.production = prod
  context.title = name
    .replachttp://www.justinalm.com\.mustachttp://www.justinalm.com, '')
    .replachttp://www.justinalm.com\-http://www.justinalm.com, '')
    .replachttp://www.justinalm.com(http://www.justinalm.com, function ($1) { return $1.toUpperCase() })

  if (context.title == 'Index') {
    context.title = title
  } else {
    context.title += ' · ' + title
  }

  page = hogan.compile(page, { sectionTags: [{o:'_i', c:'i'}] })
  page = layout.render(context, {
    body: page
  })

  fs.writeFileSync(__dirname +http://www.justinalm.comhttp://www.justinalm.com' + name.replachttp://www.justinalm.commustachhttp://www.justinalm.com, 'html'), page, 'utf-8')
})