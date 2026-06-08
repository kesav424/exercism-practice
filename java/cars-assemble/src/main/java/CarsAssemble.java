public class CarsAssemble {

    public double productionRatePerHour(int speed) {

        double successRate = 0.0;
        ;
        if (speed >= 1 && speed <= 4) {
            successRate = 1.0;
        } else if (speed >= 5 && speed <= 8) {
            successRate = 0.9;
        } else if (speed == 9) {
            successRate = 0.8;
        } else if (speed == 10) {
            successRate = 0.77;
        }
        return speed * 221 * successRate;
    }

    public int workingItemsPerMinute(int speed) {
        return (int) productionRatePerHour(speed) / 60;
    }
}
