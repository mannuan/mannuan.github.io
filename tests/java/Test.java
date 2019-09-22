import java.util.Scanner;
public class Test{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int T = scanner.nextInt();
        while(T > 0){
            int A = scanner.nextInt();
            int B = scanner.nextInt();
            int p = scanner.nextInt();
            int q = scanner.nextInt();
            if(A>=B){
                System.out.println(0);
                T--;
                continue;
            }
            int count = 1;
            while(B>A+p){
                p = p*q;
                count++;
            }
            System.out.println(count);
            T--;
        }
    }
}