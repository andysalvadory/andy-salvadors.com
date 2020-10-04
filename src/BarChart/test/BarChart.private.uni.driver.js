import publicDriverFactory from '../BarChart.uni.driver';
import DataHooks from '../dataHooks';

export const barChartPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
