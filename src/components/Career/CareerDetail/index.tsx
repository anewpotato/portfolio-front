import Details from '@src/components/Details';
import { careerInformation } from '@src/constant/career';

type CareerDetailPropsType = {
  isOrderNew: boolean;
};

export default function CareerDetail({ isOrderNew }: CareerDetailPropsType) {
  return careerInformation.map(
    ({ key, name, info, period, team, rank, position, role, result }) => (
      <Details
        key={key}
        src={`/image/career/${key}.svg`}
        label={name}
        width={170}
      >
        <div className="text-sm flex flex-col">
          <div className="mb-6">{info}</div>
          <div>근무 기간 : {period}</div>
          <div>소속 : {team}</div>
          <div>직급 : {rank}</div>
          <div>직책 : {position}</div>
          <div className="mb-4">역할: {role} </div>
          <div className="flex flex-col">
            담당 업무
            <div className="indent-2 font-semibold">
              {result.map((text, index) => (
                <div key={text}>{`${index + 1}. ${text}`}</div>
              ))}
            </div>
          </div>
        </div>
      </Details>
    ),
  );
}
