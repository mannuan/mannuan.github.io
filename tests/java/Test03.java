import java.util.Scanner;
public class Test03{
    public static int searchMinValue(int low, int high){
        int ten = 0, sigle = 0;
        for (int i = low; i < high; i++){
            boolean isPrime = true;
            for(int j = 2; j < Math.sqrt(i) + 1; j++){
                if(i % j == 0){
                    isPrime = false;
                    break;
                }
            }
            if(isPrime){
                int val = i;
                if(val < 10){
                    sigle += val;
                }else {
                    sigle += val % 10;
                    ten += (val / 10) % 10;
                }
            }
        }
        if(ten > sigle){
            return sigle;
        }else {
            return ten;
        }
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int low = scanner.nextInt();
        int high = scanner.nextInt();
        System.out.println(searchMinValue(low, high));
    }
}