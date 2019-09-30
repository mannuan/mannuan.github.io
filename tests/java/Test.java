import java.util.Scanner;
public class Test{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int[] dp = new int[n+1];
        int[] nums = new int[n+1];
        scanner.nextLine();
        for(int i=0; i<n; i++){
            String line = scanner.nextLine();
            String[] values = line.split(" ");
            for(int k=1; k<values.length; k++){
                int dest = Integer.parseInt(values[k]);
                if(dest!=0&&dp[dest]==0){
                    nums[i+1] += 1;
                    dp[dest] = 1;
                }
            }
            if(dp[i+1]==0){
                nums[i+1]+=1;
                dp[i+1] = 1;
            }
        }
        for(int i=1; i<=n; i++){
            System.out.print(nums[i]+(i==n?"":" "));
        }
        System.out.println();
    }
}