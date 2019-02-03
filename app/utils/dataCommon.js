import React from 'react';
import { List } from 'antd';

export function getKanjiMeanSingle(mean) {
  return mean ? mean.split(',')[0] : '\n';
}

export function mergeKanjiCompDetail(compDetail) {
  if (compDetail && compDetail.length > 0) {
    const result = compDetail.map(item => (
      <span key={item.w} className="comp-detail-item">
        <strong> {item.w} </strong>- {item.h}{' '}
      </span>
    ));
    return <span>{result}</span>;
  }
  return null;
}

export function splitKanjiDetail(detail) {
  if (detail && detail.includes('##')) {
    return (
      <List
        size="small"
        dataSource={detail.split('##')}
        renderItem={item => (
          <List.Item className="kanji-detail-item">• {item}</List.Item>
        )}
      />
    );
  }
  return detail;
}

export function splitKanjiKunOn(kunOn) {
  if (kunOn && kunOn.includes(' ')) {
    const result = kunOn.split(' ').map(item => (
      <span key={item} className="kunon-item">
        {item}
      </span>
    ));
    return <span>{result}</span>;
  }
  return kunOn;
}
