import { EtcInformationType } from '@src/types/contents/etc';

export default function EtcDetail({ label, content }: EtcInformationType) {
  return (
    <div className="flex divide-x-4 items-center">
      <div className="basis-1/6 text-2xl font-bold">{label}</div>
      <div className="flex flex-col basis-5/6 px-3 py-1 ">
        {content.map(({ key, contents, period }, index) => (
          <div key={key} className={index !== 0 ? 'mt-5' : ''}>
            <span className="text-sm font-semibold text-gray-400">
              {period}
            </span>
            <div className="mb-2">{key}</div>
            {contents.map((text) => (
              <div key={text} className="text-sm">
                {text}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
