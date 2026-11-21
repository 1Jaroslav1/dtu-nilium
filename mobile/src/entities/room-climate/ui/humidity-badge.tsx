import { CircleAlert, Check } from 'lucide-react-native';
import { Badge } from '@/shared/ui';
import { humidityStatus } from '../model/humidity';

const LABEL = { dry: 'Dry', comfortable: 'Comfortable', humid: 'Humid' } as const;

/** Humidity status as icon + text, never colour alone (UI-Pedia Rule 75). */
export function HumidityBadge({ percent }: { percent: number }) {
  const status = humidityStatus(percent);
  const ok = status === 'comfortable';
  return (
    <Badge variant={ok ? 'success' : 'warning'} icon={ok ? Check : CircleAlert}>
      {LABEL[status]}
    </Badge>
  );
}
