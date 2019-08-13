// 企国是一个以太阳能主要发电手段的国家』因此他们国家中有着非常的太旧能基川锥接着的基站会用合成一个发电集群，但是不率的是心国不时睡漫酒天的洪水，当洪水演没基站时，基站能停止发电，同时械追断开与相邻基始的接，你作为企用国的水观家，有着这样的任务：在水到来时，计

// 算出成电集械共水電没后横分成了多少个集群

// 由于远的宇宙争的原因量文明是一个维世界里的文明所以你可以这样理解发电基的位置他们的锥接关系给一个一態数组 a，长度为 n』表示了 n 个基帖的位置高意信息数用的第个元素 a」示第个基站的海拔高康是 a 而下标相邻的相邻井且違立進川即 x 号基站与 x1 無算站、x+1 号基站相

// ,1 号基站仅与 2를相に，而 n 号基站仅与 n1 号站相部，当一版海高度为 y 的共水到来时，海裁高度小于等于 y 的基法都会减认为案要停止发电，同时断开与相邻基的能接

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