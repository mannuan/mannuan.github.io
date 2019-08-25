import java.util.Scanner;
public class Test{
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String n = scan.nextLine();
        int N = Integer.valueOf(n);
        String s = scan.nextLine();
        int count = 0;
        int max = 0;
        for(int i=0;i<N;i++){
            char c = s.charAt(i);
            if(65<=c&&c<=90){
                if(i!=N-1){
                    count ++;
                }else{
                    count ++;
                    max += count+1;
                }
            }else{
                if(count >= 2){
                    max += count + 3;
                }else if(count == 1){
                    max += 3;
                }else{
                    max += 1;
                }
                count = 0;
            }
        }
        System.out.println(max);
    }
}