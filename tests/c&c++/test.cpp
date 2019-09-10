# include<iostream>
# include<string.h>
# include<stdio.h>
using namespace std;
#define maxn 100010
#define inf 1000000007
int dp[maxn];
int z[maxn];
int main(){
    int n;
    scanf("%d", &n);
    for(int i=1; i<=n; i++){
        scanf("%d", &z[i]);
    }
    int mon;
    scanf("%d", &mon);
    for(int i=0; i<mon; i++){
        dp[i] = inf;
    }
    dp[0] = 0;
    for(int i=1; i<=n;i++){
        for(int v=z[i]; v<=mon; v++){
            dp[v] = min(dp[v], dp[v-z[i]]+1);
        }
    }
    if(dp[mon]>=inf){
        printf("-1\n");

    }else{
        printf("%d\n", dp[mon]);
    }
    return 0;
}