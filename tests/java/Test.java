import java.util.Scanner;
public class Test{
    public static int bitAdd(int a,int b) {
        int _sum = 0;
        while(b != 0){
            _sum = a ^ b;
            b = (a & b) << 1;
            a = _sum;
        }
        return a;  
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String line1 = scanner.nextLine();
        String line2 = scanner.nextLine();
        System.out.println(bitAdd(Integer.parseInt(line1), Integer.parseInt(line2)));
        scanner.close();
    }
}