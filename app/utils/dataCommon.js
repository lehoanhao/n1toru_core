import React from 'react';

export function getKanjiMeanSingle(mean) {
  return mean ? mean.split(',')[0] : '\n';
}

export function mergeKanjiCompDetail(compDetail) {
  if (compDetail && compDetail.length > 0) {
    const result = compDetail.map(item => (
      <span key={item.w} className="comp-detail-item">
        <strong>{item.w} </strong>- {item.h}{' '}
      </span>
    ));
    return <span>{result}</span>;
  }
  return null;
}
