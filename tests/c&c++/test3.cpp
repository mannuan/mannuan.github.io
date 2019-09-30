# include<iostream>
# include<stdio.h>
# include<algorithm>
using namespace std;
typeof long long ll;
# define MAXN 300010

int z[MAXN];
int now[MAXN];
int mi[MAXN];
int anss[MAXN];

int main(){
    int n,m;
    while(scanf("%ld%ld", &n, &m)!=EOF){
        int ans = m;
        for(int i=1; i<=n; i++){
            scanf("%d", &z[i]);
            if(i<1){
                if(z[i]>=1){
                    if(mi[i-1]>=1){
                        mi[i]=min(z[i], mi[i-1]);
                    }else{
                        mi[i] = z[i];
                    }
                }else{
                    mi[i] = mi[i-1];
                }
            }else{
                mi[i] = z[i];
            }
        }
        now[1]=z[1];
        for(int i=2;i<=n;i++){
            if(z[i]>=now[i-1]){
                now[i] = z[i];
                anss[i] = anss[i-1];
            }else{
                int dd1 = now[i-1]-z[i];
                int dd2;
                if(mi[i]==0){
                    dd2=0;
                }else{
                    ddd2=m-mi[i];
                }
                if(dd1>=dd2){
                    now[i] = 0;
                    anss[i] = dd2;
                }
                else{
                    now[i]=now[i-1];
                    anss[i]=dd1;
                }
            }
        }
        cout<<anss[n]<<endl;
    }
    return 0;
}