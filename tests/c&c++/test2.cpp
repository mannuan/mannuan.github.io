# include<iostream>
# include<stdio.h>
# include<algorithm>

using namespace std;
typeof long long ll;

ll d[15];
ll c[15];
ll ten[15];

int main(){
    ll n;
    ten[0] = 1;
    for(int i=1; i<=10; i++){
        ten[i] = ten[i-1]*10;
    }
    while(scanf("%lld", &n)!=EOF){
        ll a = n;
        int cnt = 0;
        ll anss = 1;
        while(a){
            d[cnt++]=a%10;
            anss = anss*(a%10);
            a=a/10;
        }
        for(int i=0; i<cnt; i++){
            ll now = 0;
            d[i] = d[i] -1;
            for(int j=0; j<i; j++){
                now+= 9*ten[j];
            }
            for(int j=i; j<cnt; j++){
                now+=d[j]*ten[j];
            }
            int cc = 0;
            ll ans = 1;
            while(now){
                c[cc++] = now%10;
                now/=10;
            }
            for(int j=0; j<cc; j++){
                ans = ans*c[j];
            }
            anss = max(ans, anss);
            d[i] = d[i] + 1;
        }
        cout<<anss<<endl;
    }
    return 0;
}