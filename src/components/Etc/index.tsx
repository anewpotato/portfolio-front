import { etcInformation } from '@src/constant/etc';
import { EtcInformationType } from '@src/types/contents/etc';
import EtcDetail from './EtcDetail';

export default function Etc() {
  return (
    <div className="w-full h-fit grid grid-cols-2 gap-y-8 items-start">
      {etcInformation.map(({ label, content }: EtcInformationType) => (
        <EtcDetail key={label} label={label} content={content} />
      ))}
    </div>
  );
}
