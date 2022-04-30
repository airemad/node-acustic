const debug = require('debug')('airemad-acustic:parser')

const { getStationById } = require('@airemad/stations')

const extractRows = report => {
  debug('Extracting rows')
  const [, ...rawRows] = report.split('\r\n')
  return Promise.all(rawRows.filter(row => row.length).map(row => digestRow(row.split(', '))))
}

const parseReport = async (report) => {
  debug('Parsing process has started')
  const rows = await extractRows(report)
  debug('Parsing process has finished')
  return rows
}

const getPeriod = type => {
  const dic = {
    T: 'total',
    D: 'day',
    E: 'evening',
    N: 'night'
  }
  return dic[type]
}

const digestRow = async row => {
  const [stationId, year, month, day, type, laeq, las01, las10, las50, las90, las99] = row
  const { id, uuid, name } = await getStationById(stationId)

  return {
    id,
    uuid,
    name,
    period: getPeriod(type),
    date: `${year}-${month}-${day}`,
    laeq: parseInt(laeq),
    las01: parseInt(las01),
    las10: parseInt(las10),
    las50: parseInt(las50),
    las90: parseInt(las90),
    las99: parseInt(las99)
  }
}

module.exports = { parseReport, getPeriod }
