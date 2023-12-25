'use client'

import React, { useState } from 'react';
import type { Dayjs } from 'dayjs';
import type { BadgeProps, CalendarProps } from 'antd';
import { Badge, Calendar } from 'antd';
import BootModal from '@/components/modal/BootModal';
import ScheduleModalFooter from '@/components/schedule/scheduleModalFooter';
import ScheduleModalBody, { EventStatus } from '@/components/schedule/scheduleModalBody';

const getListData = (value: Dayjs) => {
  let listData;

  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event......' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ];
      break;
    default:
  }

  console.log(value)
  console.log(listData)
  
  return listData || [];
};

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const Schedule : React.FC = () => {

  const DateSelectHandler = () => {

  }

  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? 
    (<div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>) :
    null;
  };
    
      const dateCellRender = (value: Dayjs) => {
        const listData = getListData(value);
        return (
          <ul className="events">
            {listData.map((item) => (
              <li key={item.content}>
                <Badge status={item.type as BadgeProps['status']} text={item.content} />
              </li>
            ))}
          </ul>
        );
      };

      const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
      };
    
      const [modalIsopen, openModal] = useState<boolean>(false);

      return(
        <div>
          <BootModal open={modalIsopen} title={'This is title'} 
            footer={
              <ScheduleModalFooter>
                <>
                </>
              </ScheduleModalFooter>
            } 
            body={
              <ScheduleModalBody description={'Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description '} scheduledDate={new Date(2023, 12, 23)} type={EventStatus.InProcess} />
            } />

          <Calendar cellRender={cellRender} onSelect={(date, select) => {
            if (select.source == 'date') {
              openModal(!modalIsopen)
            }
          }} />
        </div>
      );
}

export default Schedule