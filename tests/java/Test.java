import java.util.Scanner;
public class Test{

    public static void dp(String d, int N){
        int mod = 1_000_000_007;
        int[][] dp = new int[N+1][N+1];
        for(int i=0; i<=N; i++){
            dp[0][i] = 1;
        }
        for(int i=0; i<N;i++){
            if(d.charAt(i) == '0'){
                for(int j=0, ct =0; j<N-i;j++){
                    dp[i+1][j] = ct = (ct + dp[i][j]) % mod;
                }
            }else{
                for(int j=N-i-1, ct=0;j>=0;j--){
                    dp[i+1][j] = ct = (ct + dp[i][j+1]) % mod;
                }
            }
        }
        System.out.println(dp[N][0]);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt()-1;
        StringBuilder sb = new StringBuilder();
        for(int i=0; i<N;i++){
            sb.append(sc.nextInt()+"");
        }
        String d = sb.toString();
        dp(d, N);
    }
}