import java.util.Scanner;
public class Test{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int[] N = new int[n];
        for(int i=0;i<n;i++){
            N[i] = scanner.nextInt();
        }
        int q = scanner.nextInt();
        int[] Q = new int[q];
        for(int i=0;i<q;i++){
            Q[i] = scanner.nextInt();
        }
        for(int e=0;e<Q.length;e++){
            int[] _new = new int[n];
            for(int i=0;i<n;i++){
                _new[i] = N[i];
            }
            for(int j=0;j<_new.length;j++){
                if(_new[j]<=Q[e]){
                    _new[j] = -1;
                }
            }
            int ans = 0;
            int is_drown = 0;
            for(int i=0;i<_new.length;i++){
                if(i==0 && _new[i] != -1){
                    ans+=1;
                }else if(i==_new.length-1 && _new[i] != -1){
                    if(_new[i-1]==-1){
                        ans += 1;
                    }
                }else{
                    if(_new[i] != -1){
                        if(_new[i-1]==-1){
                            ans+=1;
                        }
                    }
                }
            }
            System.out.println(ans);
        }
    }
}