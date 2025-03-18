import { generateYAxis } from '../utils';

describe('generateYAxis', () => {
  it('should generate correct y-axis labels based on highest revenue', () => {
    const revenueData = [
      { month: 'Jan', revenue: 1200 },
      { month: 'Feb', revenue: 2500 },
      { month: 'Mar', revenue: 1800 },
    ];

    const { yAxisLabels, topLabel } = generateYAxis(revenueData);

    expect(topLabel).toBe(3000); // Highest revenue is 2500, rounded to 3000
    expect(yAxisLabels).toEqual(['$3K', '$2K', '$1K', '$0K']);
  });

  it('should return only $0K if there is no revenue', () => {
    const revenueData = [{ month: 'Jan', revenue: 0 }];

    const { yAxisLabels, topLabel } = generateYAxis(revenueData);

    expect(topLabel).toBe(0);
    expect(yAxisLabels).toEqual(['$0K']);
  });

  it('should handle revenues exactly at 1000 increments correctly', () => {
    const revenueData = [
      { month: 'Jan', revenue: 1000 },
      { month: 'Feb', revenue: 2000 },
      { month: 'Mar', revenue: 3000 },
    ];

    const { yAxisLabels, topLabel } = generateYAxis(revenueData);

    expect(topLabel).toBe(3000);
    expect(yAxisLabels).toEqual(['$3K', '$2K', '$1K', '$0K']);
  });

  it('should work with negative revenues gracefully', () => {
    const revenueData = [
      { month: 'Jan', revenue: -500 },
      { month: 'Feb', revenue: -1500 },
    ];

    const { yAxisLabels, topLabel } = generateYAxis(revenueData);

    expect(topLabel).toBe(-0); // Highest record is negative, so top should be 0
    expect(yAxisLabels).toEqual(['$0K']);
  });
});