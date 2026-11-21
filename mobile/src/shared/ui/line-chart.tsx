import { useState } from 'react';
import { View, type LayoutChangeEvent } from 'react-native';
import Svg, { Line, Polyline, Rect } from 'react-native-svg';
import { cn } from '@/shared/lib/utils';

type LineChartProps = {
  values: number[];
  min: number;
  max: number;
  /** Stroke colour (pass a THEME colour: SVG can't read className). */
  color: string;
  height?: number;
  /** Shaded band between two values, e.g. a comfortable range. */
  band?: { from: number; to: number; color: string };
  /** Dashed reference line at a value, e.g. a threshold. */
  dashedAt?: number;
  /**
   * 'edges' spreads points from the left to the right edge; 'slots' centres each point
   * in its slot so it lines up with a BarChart of the same length.
   */
  align?: 'edges' | 'slots';
  /** Set when drawn over another chart; omit to expose it as an image. */
  accessibilityLabel?: string;
  className?: string;
};

/** Line chart drawn with react-native-svg; sizes itself to its container width. */
function LineChart({
  values,
  min,
  max,
  color,
  height = 120,
  band,
  dashedAt,
  align = 'edges',
  accessibilityLabel,
  className,
}: LineChartProps) {
  const [width, setWidth] = useState(0);
  const onLayout = (e: LayoutChangeEvent) => setWidth(e.nativeEvent.layout.width);
  const y = (v: number) => height - ((v - min) / (max - min)) * height;
  const x = (i: number) =>
    align === 'slots'
      ? ((i + 0.5) / values.length) * width
      : (i / Math.max(1, values.length - 1)) * width;
  const points = values.map((v, i) => `${x(i)},${y(v)}`).join(' ');

  return (
    <View
      onLayout={onLayout}
      className={cn('w-full', className)}
      style={{ height }}
      role={accessibilityLabel ? 'img' : undefined}
      aria-label={accessibilityLabel}
      aria-hidden={accessibilityLabel ? undefined : true}
      pointerEvents="none"
    >
      {width > 0 ? (
        <Svg width={width} height={height}>
          {band ? (
            <Rect x={0} y={y(band.to)} width={width} height={y(band.from) - y(band.to)} fill={band.color} />
          ) : null}
          {dashedAt !== undefined ? (
            <Line x1={0} x2={width} y1={y(dashedAt)} y2={y(dashedAt)} stroke={color} strokeWidth={1} strokeDasharray="4 4" />
          ) : null}
          <Polyline
            points={points}
            fill="none"
            stroke={color}
            strokeWidth={2.5}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </Svg>
      ) : null}
    </View>
  );
}

export { LineChart };
