
class BirdWatcher {
    private final int[] birdsPerDay;

    public BirdWatcher(int[] birdsPerDay) {
        this.birdsPerDay = birdsPerDay.clone();
    }

    public static int[] getLastWeek() {
        return new int[] { 0, 2, 5, 3, 7, 8, 4 };
    }

    public int getToday() {
        return birdsPerDay[birdsPerDay.length - 1];
    }

    public void incrementTodaysCount() {
        birdsPerDay[birdsPerDay.length - 1]++;
    }

    public boolean hasDayWithoutBirds() {

        for (int j = 0; j < birdsPerDay.length; j++) {
            if (birdsPerDay[j] == 0) {
                return true;
            }
        }
        return false;
    }

    public int getCountForFirstDays(int numberOfDays) {
        int count = 0;
        for (int i = 0; i < numberOfDays && i < birdsPerDay.length; i++) {
            count = count + birdsPerDay[i];
        }
        return count;
    }

    public int getBusyDays() {
        int busyDaysCount = 0;
        for (int i : birdsPerDay) {
            if (i >= 5) {
                busyDaysCount++;
            }
        }
        return busyDaysCount;
    }
}
