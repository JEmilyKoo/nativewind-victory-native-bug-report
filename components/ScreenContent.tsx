import { View, Text } from 'react-native';
import { useUnstableNativeVariable, cssInterop } from 'nativewind';
import { CartesianChart, Line } from 'victory-native';
import { data } from '../data';

const StyledLine = cssInterop(Line, {
  className: {
    target: false,
    nativeStyleToProp: {
      color: 'color',
    },
  },
});

export const ScreenContent = () => {
  const rawColorPrimaryHsl = useUnstableNativeVariable('--color-primary');
    const colorPrimaryHsl = `hsl(${rawColorPrimaryHsl?.split(' ').join(', ')})`;
    return (
      <View className="flex-1 gap-3">
        <View className="mx-4 h-72">
          <Text className="text-red-500">
            Setting className=&quot;text-red-500&quot;
          </Text>
          <CartesianChart
            data={data}
            xKey="date"
            yKeys={['balance']}
            xAxis={{ lineWidth: 0 }}
            yAxis={[{ lineWidth: 0 }]}
          >
            {({ points }) => (
              <>
                <StyledLine
                  points={points.balance}
                  strokeWidth={1}
                  className="text-red-500"
                />
              </>
            )}
          </CartesianChart>
        </View>
        <View className="mx-4 h-72">
          <Text className="text-primary">
            (Bug) - Setting className=&quot;text-primary&quot;
          </Text>
          <CartesianChart
            data={data}
            xKey="date"
            yKeys={['balance']}
            xAxis={{ lineWidth: 0 }}
            yAxis={[{ lineWidth: 0 }]}
          >
            {({ points }) => (
              <>
                <StyledLine
                  points={points.balance}
                  strokeWidth={1}
                  className="text-primary"
                />
              </>
            )}
          </CartesianChart>
        </View>
        <View className="mx-4 h-72">
          <Text className="text-primary">
            Setting color=&quot;{colorPrimaryHsl}&quot; from
            useUnstableNativeVariable(&apos;--color-primary&apos;)
          </Text>
          <CartesianChart
            data={data}
            xKey="date"
            yKeys={['balance']}
            xAxis={{ lineWidth: 0 }}
            yAxis={[{ lineWidth: 0 }]}
          >
            {({ points }) => (
              <>
                <StyledLine
                  points={points.balance}
                  strokeWidth={1}
                  color={colorPrimaryHsl}
                />
              </>
            )}
          </CartesianChart>
        </View>
      </View>
    );
}
