#!/usr/bin/env node
const fs = require('fs')
const YAML = require('yaml')

const file = fs.readFileSync('./src/data-maj.yml', 'utf8')
const parsed = YAML.parse(file)

const prepared = {}

function idListToObject (list) {
  let d = {}
  list.forEach(element => {
    d[element.id] = element
  });
  return d
}

function checkIdsConsistency (list, source) {
  let l = []
  if (!list) {
    return l
  }
  list.forEach(id => {
    const e = source[id]
    if (!e) {
      throw Error(`${id} not present in ${JSON.stringify(source)}`)
    }
  });
}

prepared.defaults = parsed.defaults

prepared['catégories'] = parsed['catégories']
prepared['catégoriesById'] = idListToObject(prepared['catégories'])

prepared['tags'] = parsed['tags']
prepared['tagsById'] = idListToObject(prepared['tags'])

prepared['canaux'] = parsed['canaux']
prepared['canauxById'] = idListToObject(prepared['canaux'])

prepared['prérequis'] = parsed['prérequis']
prepared['prérequisById'] = idListToObject(prepared['prérequis'])

prepared['entrées'] = parsed['entrées'].map(e => {
  var finalEntry = {
    ...parsed.defaults,
    ...e
  }
  checkIdsConsistency(finalEntry['catégories'].tags, prepared['catégoriesById'])
  if (finalEntry['prénom']) {
    checkIdsConsistency(finalEntry['prénom'].tags, prepared['tagsById'])
    checkIdsConsistency(finalEntry['prénom'].canaux, prepared['canauxById'])
  }
  if (finalEntry['genre']) {
    checkIdsConsistency(finalEntry['genre'].tags, prepared['tagsById'])
    checkIdsConsistency(finalEntry['genre'].canaux, prepared['canauxById'])
  }

  return finalEntry

})
prepared['entréesById'] = idListToObject(prepared['entrées'])

console.log(JSON.stringify(prepared, null, 2))