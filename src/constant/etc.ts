import { EtcInformationType } from '@src/types/contents/etc';

export const etcInformation: EtcInformationType[] = [
  {
    label: '학력',
    content: [
      {
        key: '경기도 시흥시 은행고등학교',
        contents: ['이과계열'],
        period: '2011.03 ~ 2014.02',
      },
      {
        key: '충청남도 천안시 남서울대학교',
        contents: ['학과: 컴퓨터소프트웨어학과', '학점: 4.26 / 4.5'],
        period: '2014.03 ~ 2019.08',
      },
    ],
  },
  {
    label: '병역',
    content: [
      {
        key: '육군 (헌병)',
        contents: ['만기 제대'],
        period: '2015.06 ~ 2017.03',
      },
    ],
  },
  {
    label: '자격증',
    content: [
      {
        key: '정보처리기사',
        contents: ['자격번호: 19201101394Y', '발급기관: 한국산업인력공단'],
        period: '2019.05',
      },
    ],
  },
];
